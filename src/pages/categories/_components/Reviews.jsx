import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CiStar } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";
import { CiCircleRemove } from "react-icons/ci";
import InputBox from "../../../assets/components/InputBox";
import Label from "../../../assets/components/Label";
import Button from "../../../assets/components/Button";

export default function Reviews() {
  const product = useSelector((state) => state.products.singleProduct);

  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");

  const [rating, setRating] = useState(0); // State to keep track of selected rating

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const [mediaFiles, setMediaFiles] = useState([]);
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setMediaFiles([...mediaFiles, ...files]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...mediaFiles];
    updatedFiles.splice(index, 1);
    setMediaFiles(updatedFiles);
  };
  return (
    <section className="mt-4">
      <h1 className="text-xl font-bold">Reviews</h1>
      <p>There are no reviews yet.</p>

      <div className="p-6 border mt-5">
        <h1 className="font-hind text-xl ">
          Be the first to review <span className="text-secondary font-bold">“{product.name}”</span>
        </h1>
        <p className="font-hind text-sm mt-1">
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="mt-5 flex gap-5 items-center">
          <p className="text-xl">Your rating *</p>
          {[1, 2, 3, 4, 5].map((value) => (
            <CiStar
              key={value}
              className={`mt-2 text-2xl cursor-pointer hover:text-secondary ${
                value <= rating ? "text-secondary" : ""
              }`}
              onClick={() => handleRatingClick(value)}
            />
          ))}
        </div>

        <p className="text-xl mt-5">Your review *</p>
        <textarea
          className="outline-0 border w-full mt-2 text-sm p-2"
          placeholder="Your review ..."
          wrap="off"
        ></textarea>

        <div>
          <p className="text-xl mt-5">Add a photo or video *</p>
          <div className="flex border p-4 mt-2">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="fileInput"
            />
            <label htmlFor="fileInput" className="cursor-pointer flex">
              <FiUpload className="text-xl mr-2" />
              Upload File
            </label>
          </div>

          <div className="flex flex-wrap border p-4 mt-4 gap-2">
            {mediaFiles.length > 0 ? (
              mediaFiles.map((file, index) => (
                <div key={index} className="flex flex-col">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Media ${index + 1}`}
                    className="size-36 object-contain"
                  />
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="flex  items-center justify-center gap-2 border p-2 border-red-100 rounded "
                  >
                    <CiCircleRemove className="text-xl text-success font-bold " />
                    <p className="text-success">Remove</p>
                  </button>
                </div>
              ))
            ) : (
              <p>Please Select Images</p>
            )}
          </div>
        </div>
        <div className="mt-5 grid lg:grid-cols-2 gap-4 ">
          <div>
            <Label id="reviewName" lblName="Name" />
            <InputBox
              id="reviewName"
              value={reviewName}
              setReviewName={setReviewName}
            />
          </div>
          <div>
            <Label id="reviewEmail" lblName="Email" />
            <InputBox
              id="reviewEmail"
              value={reviewEmail}
              setReviewName={setReviewEmail}
            />
          </div>
        </div>
        <Button lblName="Submit" />
      </div>
    </section>
  );
}
