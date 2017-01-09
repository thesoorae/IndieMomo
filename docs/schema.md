# Schema Information

## users

| column name | data type | details |
|---|---|---|
|id|integer|not null, primary key|
|username|string|not null, indexed, unique|
|email|string|not null, indexed, unique|
|zip_code|string|not null, indexed|
|img_url| string | |
|password_digest| string| not null|
|session_token| string|not null, indexed, unique|

## batches
| column name | data type | details |
|---|---|---|
|id|integer|not null, primary key|
|title|string|not null, indexed|
|category_id| integer||
|description | text| |
|goal|integer|not null|
|zip_code|integer|not null, indexed|
|order_description| text| |
|chef_id|integer|not null, indexed|
|option1_cost| float | not null|
|option1_qty|integer|not null|
|option1_description|text||
|option2_cost| float | not null|
|option2_qty|integer|not null|
|option2_description|text||
|option3_cost| float | not null|
|option3_qty|integer|not null|
|option3_description|text||



## batch_images
| column name | data type | details |
|---|---|---|
|id|integer|not null, primary_key|
|url| string |not null|
|batch_id|integer|not null, indexed|

## orders
| column name | data type | details |
|---|---|---|
|id|integer|not null, primary_key|
|batch_id|integer|not null, indexed|
|user_id|integer|not null, indexed|
|order_quantity|integer|not null|
