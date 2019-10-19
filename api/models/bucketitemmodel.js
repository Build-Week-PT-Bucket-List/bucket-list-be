const db = require('../../data/dbConfig');

module.exports = {
  getBucketItemById,
  getBucketItemByUserId,
  createBucketItem,
  updateBucketItem,
  deleteBucketItem
};

function getBucketItemById(id) {
  return db('bucketitem')
    .where({ id })
    .first();
}

function getBucketItemByUserId(user_id) {
  return db('bucketitem').where({ user_id });
}

async function createBucketItem(bucketitem) {
  const [id] = await db('bucketitem').insert(bucketitem, ['id']);

  return id;
}

function updateBucketItem(id, bucketitem) {
  return db('bucketitem')
    .where({ id })
    .update(bucketitem);
}

function deleteBucketItem(id) {
  return db('bucketitem')
    .where({ id })
    .del();
}
