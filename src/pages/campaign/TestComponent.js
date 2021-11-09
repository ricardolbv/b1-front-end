const TestComponent = (props) => {
    return (
        <>
            <form method="post" action="https://upload-archive-node.azurewebsites.net/api/archive-upload" enctype="multipart/form-data">
                <label for="myfile"> Select: </label>
                <input type="file" id="myfile" name="filename">tst</input>
                <input type="submit"> tst</input>
            </form>
        </>
    )
}

export default TestComponent;