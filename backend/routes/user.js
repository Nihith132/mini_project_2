const express = require('express');
const router = express.Router();
const SearchHistory = require('../models/SearchHistory');
const { authenticateUser } = require('../auth/auth-middleware');

/**
 * GET /api/user/search-history
 * Get user's search history
 * Requires authentication
 */
router.get('/search-history', authenticateUser, async (req, res) => {
  try {
    const { limit = 10, skip = 0 } = req.query;
    const userId = req.user._id;

    const searches = await SearchHistory.find({ userId })
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip(parseInt(skip));

    res.json(searches);

  } catch (error) {
    console.error('❌ Get search history error:', error);
    res.status(500).json({ error: 'Failed to get search history' });
  }
});

/**
 * GET /api/user/saved-trips
 * Get user's saved trips
 * Requires authentication
 */
router.get('/saved-trips', authenticateUser, async (req, res) => {
  try {
    const { limit = 10, skip = 0 } = req.query;
    const userId = req.user._id;

    const savedTrips = await SearchHistory.find({ 
      userId, 
      isSaved: true 
    })
      .sort({ savedAt: -1 })
      .limit(parseInt(limit))
      .skip(parseInt(skip));

    res.json(savedTrips);

  } catch (error) {
    console.error('❌ Get saved trips error:', error);
    res.status(500).json({ error: 'Failed to get saved trips' });
  }
});

/**
 * GET /api/user/trip/:id
 * Get a specific trip by ID
 * Requires authentication
 */
router.get('/trip/:id', authenticateUser, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const trip = await SearchHistory.findOne({ 
      _id: id, 
      userId 
    });

    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    res.json(trip);

  } catch (error) {
    console.error('❌ Get trip error:', error);
    res.status(500).json({ error: 'Failed to get trip' });
  }
});

/**
 * POST /api/user/save-trip
 * Save a trip to user's saved trips
 * Requires authentication
 */
router.post('/save-trip', authenticateUser, async (req, res) => {
  try {
    const { 
      destination, 
      dates, 
      interests, 
      travelCompanion, 
      budget, 
      itinerary 
    } = req.body;
    
    const userId = req.user._id;

    // Create new search history entry
    const searchHistory = new SearchHistory({
      userId,
      destination,
      dates,
      interests,
      travelCompanion,
      budget,
      itinerary,
      isSaved: true,
      savedAt: new Date()
    });

    await searchHistory.save();

    // Update user stats
    await req.user.incrementSearches();
    req.user.stats.savedTrips += 1;
    await req.user.save();

    res.json({
      success: true,
      trip: searchHistory
    });

  } catch (error) {
    console.error('❌ Save trip error:', error);
    res.status(500).json({ error: 'Failed to save trip' });
  }
});

/**
 * POST /api/user/search
 * Record a new search (called when generating itinerary)
 * Requires authentication
 */
router.post('/search', authenticateUser, async (req, res) => {
  try {
    const { 
      destination, 
      dates, 
      interests, 
      travelCompanion, 
      budget, 
      itinerary 
    } = req.body;
    
    const userId = req.user._id;

    // Create new search history entry
    const searchHistory = new SearchHistory({
      userId,
      destination,
      dates,
      interests,
      travelCompanion,
      budget,
      itinerary,
      isSaved: false
    });

    await searchHistory.save();

    // Update user stats
    await req.user.incrementSearches();

    res.json({
      success: true,
      searchId: searchHistory._id
    });

  } catch (error) {
    console.error('❌ Record search error:', error);
    res.status(500).json({ error: 'Failed to record search' });
  }
});

/**
 * PUT /api/user/trip/:id/save
 * Mark a trip as saved
 * Requires authentication
 */
router.put('/trip/:id/save', authenticateUser, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const trip = await SearchHistory.findOne({ 
      _id: id, 
      userId 
    });

    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    const wasSaved = trip.isSaved;
    await trip.markAsSaved();

    // Update user stats if newly saved
    if (!wasSaved) {
      req.user.stats.savedTrips += 1;
      await req.user.save();
    }

    res.json({
      success: true,
      trip
    });

  } catch (error) {
    console.error('❌ Save trip error:', error);
    res.status(500).json({ error: 'Failed to save trip' });
  }
});

/**
 * PUT /api/user/trip/:id/rating
 * Add or update rating for a trip
 * Requires authentication
 */
router.put('/trip/:id/rating', authenticateUser, async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, review } = req.body;
    const userId = req.user._id;

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }

    const trip = await SearchHistory.findOne({ 
      _id: id, 
      userId 
    });

    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    await trip.addRating(rating, review);

    res.json({
      success: true,
      trip
    });

  } catch (error) {
    console.error('❌ Rate trip error:', error);
    res.status(500).json({ error: 'Failed to rate trip' });
  }
});

/**
 * DELETE /api/user/trip/:id
 * Delete a trip from user's history
 * Requires authentication
 */
router.delete('/trip/:id', authenticateUser, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const trip = await SearchHistory.findOneAndDelete({ 
      _id: id, 
      userId 
    });

    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    // Update user stats if it was saved
    if (trip.isSaved) {
      req.user.stats.savedTrips = Math.max(0, req.user.stats.savedTrips - 1);
      await req.user.save();
    }

    res.json({
      success: true,
      message: 'Trip deleted successfully'
    });

  } catch (error) {
    console.error('❌ Delete trip error:', error);
    res.status(500).json({ error: 'Failed to delete trip' });
  }
});

/**
 * GET /api/user/stats
 * Get user statistics
 * Requires authentication
 */
router.get('/stats', authenticateUser, async (req, res) => {
  try {
    const userId = req.user._id;

    // Get recent searches
    const recentSearches = await SearchHistory.getRecentSearches(userId, 5);

    // Get saved trips
    const savedTrips = await SearchHistory.getSavedTrips(userId, 5);

    res.json({
      stats: req.user.stats,
      recentSearches,
      savedTrips
    });

  } catch (error) {
    console.error('❌ Get stats error:', error);
    res.status(500).json({ error: 'Failed to get statistics' });
  }
});

module.exports = router;
