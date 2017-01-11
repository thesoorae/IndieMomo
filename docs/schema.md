# Schema Information

## users

| column name | data type | details |
|---|---|---|
|id|integer|not null, primary key|
<<<<<<< HEAD
|first_name|string||
|last_name|string||
|username|string|not null, indexed, unique|
|zip_code|integer|not null, indexed|
=======
|username|string|not null, indexed, unique|
|zip_code|string|not null, indexed|
>>>>>>> b451ef60dea3facb3cc0e9947b20e3411023345d
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

## order_options (rewards)
| column name | data type | details |
|---|---|---|
|cost| float | not null|
|qty|integer|not null|
|description|text||
|batch_id| integer | not null|


## orders (contributions)
| column name | data type | details |
|---|---|---|
|id|integer|not null, primary_key|
|order_option_id|integer|not null, indexed|
|user_id|integer|not null, indexed|
|qty|integer|not null|


## batch_images
| column name | data type | details |
|---|---|---|
|id|integer|not null, primary_key|
|url| string |not null|
|batch_id|integer|not null, indexed|
