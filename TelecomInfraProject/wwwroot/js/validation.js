function newProjectValidation() {
    var flag = false;
    if ($("#txtProjectName").val().trim() != '' && $("#ddlPlatformLayout").val().trim() != '')
        flag = true;
    return flag;
}
function addMulNodeVal() {
    var flag = false;
    var regex = /^[1-9-+()]*$/;
    isValid = regex.test(document.getElementById("txtNofNode").value);
    var maxNode = Number(configData.node.multiplenode.max);

    if ($("#txtNofNode").val().trim() != '' && isValid && Number($("#txtNofNode").val().trim() < maxNode))
        flag = true;
    else
        alert('please enter valid number');
    return flag;
}
function exportFileValidation() {
    var flag = false;
    if ($("#txtFileName").val().trim() != '')
        flag = true;
    else
        alert('please enter file name');
    return flag;
}