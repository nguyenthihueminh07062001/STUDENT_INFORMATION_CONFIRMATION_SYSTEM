const config = {
  app: {
    port: process.env.PORT || 5000,
  },

  db: {
    uri:
      process.env.MONGODB_URI || "mongodb://localhost:27017/thongTinSinhVien",
  },
};

module.exports = config;
