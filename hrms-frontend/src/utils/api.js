const ROOTURL = 'http://127.0.0.1:4000/api/v1/';
const temp = 'http://localhost:4000/employe'
const API = {
    addFaq: ROOTURL + 'faqs/addFaq',
    listFaq: ROOTURL + 'faqs/listFaq',
    viewFaq: ROOTURL + 'faqs/viewFaq',
    updateFaq: ROOTURL + 'faqs/updateFaq',
    softDeleteFaq: ROOTURL + 'faqs/softDeleteFaq',

    addDepartment: ROOTURL + 'departments/addDepartment',
    listDepartment: ROOTURL + 'departments/listDepartment',
    viewDepartment: ROOTURL + 'departments/viewDepartment',
    updateDepartment: ROOTURL + 'departments/updateDepartment',
    softDeleteDepartment: ROOTURL + 'departments/softDeleteDepartment',

    
    // Document API
    addDocument: ROOTURL + 'documents/addDocument',
    listDocument: ROOTURL + 'documents/listDocument',
    viewDocument: ROOTURL + 'documents/viewDocument',
    updateDocument: ROOTURL + 'documents/updateDocument',
    softDeleteDocument: ROOTURL + 'documents/softDeleteDocument',

    listemp: temp + '/getemp',
    updateemp: temp + '/updateemp',
    viewemp:temp+'/update',
    deleteemp:temp + '/delete',
    addemp:temp + '/addemp',
    imageretrival: temp,
    statusChange: temp + 'common/statusChange',
    statusChange: ROOTURL + 'common/statusChange',
}

const ImportedUrl = {
    API: API
}
export default ImportedUrl;


