/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tse5qu82ztjnwn2")

  collection.listRule = "project.userid=@request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tse5qu82ztjnwn2")

  collection.listRule = null

  return dao.saveCollection(collection)
})
