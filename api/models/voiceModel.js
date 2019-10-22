const db = require('../../data/dbConfig');

module.exports = {
  getBucketItemPostImageById,
  getBucketItemPostImageByPostId,
  createBucketItemPostImage,
  updateBucketItemPostImage,
  deleteBucketItemPostImage
};

function getBucketItemPostImageById(id) {
  return db('voiceMemos')
    .where({ id })
    .first();
}

function getBucketItemPostImageByPostId(post_id) {
  return db('voiceMemos').where({ post_id });
}

async function createBucketItemPostImage(bucketitempost) {
  const [id] = await db('voiceMemos').insert(bucketitempost, ['id']);

  return id;
}

function updateBucketItemPostImage(id, bucketitempost) {
  return db('voiceMemos')
    .where({ id })
    .update(bucketitempost);
}

function deleteBucketItemPostImage(id) {
  return db('voiceMemos')
    .where({ id })
    .del();
}
