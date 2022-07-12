var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BeerSchema = new Schema(
    {
      name: {type: String, required: true},
      style: [{type: Schema.Types.ObjectId, ref: 'Style', required: true}],
      description: {type: String, required: true},
      isbn: {type: String, required: true},
    }
  );

// Virtual for beer's URL
BeerSchema
.virtual('url')
.get(function () {
  return '/beer/' + this._id;
});

//Export model
module.exports = mongoose.model('Book', BookSchema);