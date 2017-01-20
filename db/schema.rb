# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170120010129) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "batch_images", force: :cascade do |t|
    t.string   "url",        null: false
    t.integer  "batch_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "batch_images", ["batch_id"], name: "index_batch_images_on_batch_id", using: :btree

  create_table "batches", force: :cascade do |t|
    t.string   "title",                            null: false
    t.string   "category"
    t.text     "description"
    t.integer  "goal",                             null: false
    t.integer  "zip_code",                         null: false
    t.text     "order_description"
    t.integer  "chef_id",                          null: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.boolean  "active",            default: true
  end

  add_index "batches", ["category"], name: "index_batches_on_category", using: :btree
  add_index "batches", ["chef_id"], name: "index_batches_on_chef_id", using: :btree
  add_index "batches", ["title"], name: "index_batches_on_title", using: :btree
  add_index "batches", ["zip_code"], name: "index_batches_on_zip_code", using: :btree

  create_table "order_options", force: :cascade do |t|
    t.float   "cost",        null: false
    t.integer "qty",         null: false
    t.text    "description"
    t.integer "batch_id",    null: false
  end

  add_index "order_options", ["batch_id"], name: "index_order_options_on_batch_id", using: :btree

  create_table "orders", force: :cascade do |t|
    t.integer  "order_option_id", null: false
    t.integer  "customer_id",     null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "orders", ["customer_id"], name: "index_orders_on_customer_id", using: :btree
  add_index "orders", ["order_option_id"], name: "index_orders_on_order_option_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "rating"
    t.text     "review_text"
    t.integer  "user_id"
    t.integer  "batch_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "reviews", ["batch_id"], name: "index_reviews_on_batch_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.integer  "zip_code"
    t.string   "img_url"
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "first_name"
    t.string   "last_name"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
