import mongoose from 'mongoose';

const seoLogSchema = new mongoose.Schema({
  crawledUrls: Array,
  // Add other fields as needed
});

const SEOLog = mongoose.models.SEOLog || mongoose.model('SEOLog', seoLogSchema);

export default SEOLog;
