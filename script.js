$("#input-id").fileinput({
    uploadUrl: "/file-upload-batch/1",
    uploadAsync: false,
    minFileCount: 2,
    maxFileCount: 10,
    overwriteInitial: false,
    initialPreviewAsData: true,
    initialPreviewFileType: 'image',
    initialPreviewConfig: [
    {   
        type: "video",  
        size: 375000,
        filetype: "video/mp4",
        url: "/file-upload-batch/2",
        key: 3,
        downloadUrl: 'true',
       
    },
        {type: "office", description: "<h5>Word Document</h5> This is a representative description number four for this file.", size: 102400, caption: "SampleDOCFile_100kb.doc", url: "/file-upload-batch/2", key: 4, downloadUrl: false}, 
        {type: "office", description: "<h5>Excel Spreadsheet</h5> This is a representative description number five for this file.", size: 45056, caption: "SampleXLSFile_38kb.xls", url: "/file-upload-batch/2", key: 5, downloadUrl: false }, 
        {type: "office", description: "<h5>Powerpoint Presentation</h5> This is a representative description number six for this file.", size: 512000, caption: "SamplePPTFile_500kb.ppt", url: "/file-upload-batch/2", key: 6, downloadUrl: false}, 
        {type: "gdocs", description: "<h5>TIFF Image</h5> This is a representative description number seven for this file.", size: 811008, caption: "multipage_tiff_example.tif", url: "/file-upload-batch/2", key: 7, downloadUrl: false}, 
        {type: "gdocs", description: "<h5>AI File</h5> This is a representative description number eight for this file.", size: 375808, caption: "sample_ai.ai", url: "/file-upload-batch/2", key: 8, downloadUrl: false}, 
        {type: "gdocs", description: "<h5>EPS File</h5> This is a representative description number nine for this file.", size: 40960, caption: "sample_eps.eps", url: "/file-upload-batch/2", key: 9, downloadUrl: false}, 
        {type: "pdf", description: "<h5>PDF File</h5> This is a representative description number ten for this file.", size: 8000, caption: "About.pdf", url: "/file-upload-batch/2", key: 10, downloadUrl: false}, 
        {type: "text", description: "<h5>Text File</h5> This is a representative description number eleven for this file.", size: 1430, caption: "LoremIpsum.txt", url: "/file-upload-batch/2", key: 11, downloadUrl: false},  
        {type: "html", description: "<h5>HTML File</h5> This is a representative description number twelve for this file.", size: 3550, caption: "LoremIpsum.html", url: "/file-upload-batch/2", key: 12, downloadUrl: false}
    ],

    // preferIconicPreview: true, 
    // previewFileIconSettings: {
    //     'xls': '<i class="fas fa-file-excel text-success"></i>',
    //     'doc': '<i class="fas fa-file-word text-primary"></i>',
    //     'ppt': '<i class="fas fa-file-powerpoint text-danger"></i>'
    // },

    // previewFileExtSettings: {
    //     'xls': function(ext) {
    //         return ext.match(/(xls|xlsx)$/i);
    //     },
    //     'doc': function(ext) {
    //         return ext.match(/(doc|docx)$/i);
    //     },
    //     'ppt': function(ext) {
    //         return ext.match(/(ppt|pptx)$/i);
    //     }
    // }
    
}).on('filesorted', function(e, params) {
    console.log('File sorted params', params);
}).on('fileuploaded', function(e, params) {
    console.log('File uploaded params', params);
});
       
       $(document).ready(function() {
    // initialize with defaults
    $("#input-id").fileinput({
        'theme': 'fas',
            'showPreview': false,
            'allowedFileExtensions': ['jpg', 'png', 'xls', 'ppt', 'doc'],
            'elErrorContainer': '#errorBlock'
    });

    // with plugin options
    $("#input-id").fileinput({'uploadUrl': '/file-upload-batch/2', 'previewFileType': 'any'});
});
    