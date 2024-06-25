import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          possimus deserunt impedit quos quod? Explicabo iste dolorem in autem
          quisquam eos distinctio quis officia minima, commodi molestias error
          asperiores alias aspernatur nobis suscipit aliquam voluptates, unde
          perspiciatis deleniti atque cupiditate?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          deserunt numquam suscipit harum accusamus excepturi voluptas magnam
          nisi? Inventore architecto obcaecati voluptatem libero nisi enim,
          distinctio reprehenderit rem repellat quae esse voluptas?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
