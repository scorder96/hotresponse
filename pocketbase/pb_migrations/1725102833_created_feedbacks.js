/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tse5qu82ztjnwn2",
    "created": "2024-08-31 11:13:53.851Z",
    "updated": "2024-08-31 11:13:53.851Z",
    "name": "feedbacks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ughq1iae",
        "name": "project",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "xtxd2ai6rruhrm5",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "brxphdjj",
        "name": "feedback",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tse5qu82ztjnwn2");

  return dao.deleteCollection(collection);
})
