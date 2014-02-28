ActsFS.fileHandlers({
  default: function(options) { // options:{ blob, fileRecord }}
    console.log('Handler 1: ' + options.fileRecord.filename);
    return {
      blob: options.blob,
      fileRecord: options.fileRecord
    }
  }
});