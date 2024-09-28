/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tse5qu82ztjnwn2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b8ahazow",
    "name": "todo",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tse5qu82ztjnwn2")

  // remove
  collection.schema.removeField("b8ahazow")

  return dao.saveCollection(collection)
})
