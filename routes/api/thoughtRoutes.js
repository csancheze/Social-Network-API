const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
  deleteAllThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought).delete(deleteAllThought);

router
  .route('/:thoughtId')
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
