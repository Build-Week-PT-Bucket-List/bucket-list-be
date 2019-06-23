const db = require("../../data/dbConfig");

module.exports = {
    getBucketItemPostById,
    getBucketItemPostByItemId,
    createBucketItemPost,
    updateBucketItemPost,
    deleteBucketItemPost,
}

function getBucketItemPostById(id) {
    return db('bucketitempost')
        .where({ id })
        .first();
}

function getBucketItemPostByItemId(post_id) {
    return db('bucketitempost')
        .where({ post_id });
}

async function createBucketItemPost(bucketitempost){
    const [id] = await db('bucketitempost')
    .insert(bucketitempost);

    return id;
}

function updateBucketItemPost(id, bucketitempost){
    return  db('bucketitem')
    .where({ id })
    .update(bucketitempost);
}   

function deleteBucketItemPost(id){
    return db('bucketitempost')
    .where({ id })
    .del();
}



 