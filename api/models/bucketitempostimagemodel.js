const db = require('../../data/dbConfig');

module.exports = {
  getBucketItemPostImageById,
  getBucketItemPostImageByPostId,
  createBucketItemPostImage,
  updateBucketItemPostImage,
  deleteBucketItemPostImage
};

function getBucketItemPostImageById(id) {
  return db('bucketitempostimage')
    .where({ id })
    .first();
}

function getBucketItemPostImageByPostId(post_id) {
  return db('bucketitempostimage').where({ post_id });
}

async function createBucketItemPostImage(bucketitempost) {
  const [id] = await db('bucketitempostimage').insert(bucketitempost, ['id']);

  return id;
}

function updateBucketItemPostImage(id, bucketitempost) {
  return db('bucketitempostimage')
    .where({ id })
    .update(bucketitempost);
}

function deleteBucketItemPostImage(id) {
  return db('bucketitempostimage')
    .where({ id })
    .del();
}
