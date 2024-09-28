/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tse5qu82ztjnwn2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yott9f5f",
    "name": "sentiment",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "keje8ctd",
    "name": "task",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tse5qu82ztjnwn2")

  // remove
  collection.schema.removeField("yott9f5f")

  // remove
  collection.schema.removeField("keje8ctd")

  return dao.saveCollection(collection)
})
