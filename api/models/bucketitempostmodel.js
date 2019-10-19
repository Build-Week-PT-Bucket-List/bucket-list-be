const db = require('../../data/dbConfig');

module.exports = {
  getBucketItemPostById,
  getBucketItemPostByItemId,
  createBucketItemPost,
  updateBucketItemPost,
  deleteBucketItemPost
};

function getBucketItemPostById(id) {
  return db('bucketitempost')
    .where({ id })
    .first();
}

function getBucketItemPostByItemId(item_id) {
  return db('bucketitempost').where({ item_id });
}

async function createBucketItemPost(bucketitempost) {
  const [id] = await db('bucketitempost').insert(bucketitempost, ['id']);

  return id;
}

function updateBucketItemPost(id, bucketitempost) {
  return db('bucketitempost')
    .where({ id })
    .update(bucketitempost);
}

function deleteBucketItemPost(id) {
  return db('bucketitempost')
    .where({ id })
    .del();
}
