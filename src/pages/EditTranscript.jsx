function EditTranscript() {
    return (
      <div className="p-10">
        <h2 className="text-xl font-bold mb-4">Edit Transcript</h2>
        <textarea
          className="w-full h-64 border p-4"
          defaultValue={`This is your transcript. You can edit this text.`}
        />
        <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded">Save Transcript</button>
      </div>
    );
  }
  
  export default EditTranscript;
  