/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tse5qu82ztjnwn2")

  collection.updateRule = "project.userid=@request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tse5qu82ztjnwn2")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
