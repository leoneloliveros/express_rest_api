import { Router } from 'express';

const router = Router();

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u1',
  },
];

router.get('/:placeId', (req, res, next) => {
  const { placeId } = req.params; // { pid: 'p1' }

  const place = DUMMY_PLACES.find((place) => {
    return place.id === placeId;
  });

  if (!place) {
    const error = new Error('Could not find a place for the provided id.');
    error.code = 404;
    throw error;
  }

  res.json({ place }); // => { place } => { place: place }
});

router.get('/user/:userId', (req, res, next) => {
  const { userId } = req.params;

  const place = DUMMY_PLACES.find((place) => {
    return place.creator === userId;
  });

  if (!place) {
    const error = new Error('Could not find a place for the provided user id.');
    error.code = 404;
    return next(error);
  }
  
  res.json({ place });
});

export default router;