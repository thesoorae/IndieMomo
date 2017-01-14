# Schema Information

## users

| column name | data type | details |
|---|---|---|
|id|integer|not null, primary key|
|first_name|string||
|last_name|string||
|username|string|not null, indexed, unique|
|zip_code|integer|not null, indexed|
|img_url| string | |
|password_digest| string| not null|
|session_token| string|not null, indexed, unique|

## batches
| column name | data type | details |
|---|---|---|
|id|integer|not null, primary key|
|title|string|not null, indexed|
|category| string||
|description | text| |
|goal|integer|not null|
|zip_code|integer|not null, indexed|
|order_description| text| |
|chef_id|integer|not null, indexed|
|qty_in_order| integer | default: 1|

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
|customer_id|integer|not null, indexed|


## batch_images
| column name | data type | details |
|---|---|---|
|id|integer|not null, primary_key|
|url| string |not null|
|batch_id|integer|not null, indexed|
