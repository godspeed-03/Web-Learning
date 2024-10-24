# schema less databse

# mention all data types in mongodb

# commands
###### TO show all the dbs

``` show dbs ```

###### To switch between diffrent dbs
``` use DB_Name ```
###### TO show collections in a db 
``` shwo collections ```

###### To get all the entries in the same collections :
``` db.Collection_Name.find() ```
<!-- The above command is using find method with emapty wuery as find all in the given collection -->
``` db.collection.find({email : "satyam2001anand@gamil.com"}) ```

###### To create a new db
``` use new_db ```
<!-- As there is no db named new db so it'll create an new db with name new_db -->

##### TO create new colelctions in the db

``` db.collection_name.insertOne({}) ```

#### To change any inserted value in adb

``` db.users.updateOne({name: 'Gola'}, {$set : {name : 'boba'}}) ```

##### To remove any value 
 ``` db.users.updateOne({name: 'Gola'}, {$unset : {name : 1}}) ```

 ### find
 ##### find vs findOne
 - Find return array of the matched value as an cursot whilw findone throws the fisrt matche object acording to your query

- usecases 
``` 
db.collection_name.find({name: 'user'})
db.collection_name.findOne({name: 'user'}) 

```
- diffrnece

ethods can be sued in cursor like count, foreach or use it with array operation

#### conditona based mention all comarison oeprator in blog

- $lt
- $gt
```
db.users.find({age: {$lt: 25}})
db.users.find({age: {$gt: 25}})
```

#### inser
- insert
- insert Many

### delete
- delete
- delete many

### Projection
- to not to get unawnated data we can write tru and false for each oabject 
``` db.users.find({}, {name:1, _id:0}) ```

### delete databse
``` db.dropdatabse ````