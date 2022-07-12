var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StyleInstanceSchema = new Schema(
  {
    name: { type: String, required: true, enum: ['IPA', 'Stout', 'Sour', 'Pale Ale']},
  }
);

// Virtual for bookinstance's URL
StyleInstanceSchema
.virtual('url')
.get(function () {
  return '/beer/style/' + this._id;
});

//Export model
module.exports = mongoose.model('StyleInstance', StyleInstanceSchema);