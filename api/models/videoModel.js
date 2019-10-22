const db = require('../../data/dbConfig');

module.exports = {
  getBucketItemPostImageById,
  getBucketItemPostImageByPostId,
  createBucketItemPostImage,
  updateBucketItemPostImage,
  deleteBucketItemPostImage
};

function getBucketItemPostImageById(id) {
  return db('videos')
    .where({ id })
    .first();
}

function getBucketItemPostImageByPostId(post_id) {
  return db('videos').where({ post_id });
}

async function createBucketItemPostImage(bucketitempost) {
  const [id] = await db('videos').insert(bucketitempost, ['id']);

  return id;
}

function updateBucketItemPostImage(id, bucketitempost) {
  return db('videos')
    .where({ id })
    .update(bucketitempost);
}

function deleteBucketItemPostImage(id) {
  return db('videos')
    .where({ id })
    .del();
}
