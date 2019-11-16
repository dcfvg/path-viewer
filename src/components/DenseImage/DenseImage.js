import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { Tooltip } from "reactstrap";
import { scaleLinear } from "d3-scale";
import styles from "./DenseImage.module.scss";

const DenseImage = ({ path, filename, rotated, objects }) => {
  const [selectedObject, setSelectedObject] = useState({});
  const textRef = useRef(null);

  const copyToClipboard = () => {
    textRef.current.select();
    document.execCommand("copy");
  };

  const xScale = scaleLinear()
    .domain([0.0, 1.0])
    .rangeRound([0, 640]);
  const yScale = scaleLinear()
    .domain([0.0, 1.0])
    .rangeRound([0, 640]);

  // console.log(filename)
  //
//   const choosedobjects = [
// "10_f24951e92144c80ad6c9ee797bb2ae98_left.jpg","108_ea3a37a1764a226d67c6b05a45d1ba89_right.jpg","118_0a812dc1b1c1c14461494e4018955a23_right.jpg","126_dfdc33f2e0bc0f6d0bad0ea2a6f28cdd_right.jpg","126_3bc8de6a72f510cfc4a46044642f5086_right.jpg","134_48027a6085f9e1b7244222670c8d8cab_left.jpg","153_0a812dc1b1c1c14461494e4018955a23_left.jpg","222_48027a6085f9e1b7244222670c8d8cab_right.jpg","222_3bc8de6a72f510cfc4a46044642f5086_left.jpg","24_f24951e92144c80ad6c9ee797bb2ae98_right.jpg","28_e2f5f4fa6f01d807833dfdecb6e2c445_right.jpg","33_bab5f3e721538a0f66c9bf8fb1ca5e6b_left.jpg","36_ea3a37a1764a226d67c6b05a45d1ba89_right.jpg","37_f24951e92144c80ad6c9ee797bb2ae98_left.jpg","4_dfdc33f2e0bc0f6d0bad0ea2a6f28cdd_right.jpg","4_48027a6085f9e1b7244222670c8d8cab_right.jpg","46_bab5f3e721538a0f66c9bf8fb1ca5e6b_right.jpg","65_bab5f3e721538a0f66c9bf8fb1ca5e6b_right.jpg","65_e2f5f4fa6f01d807833dfdecb6e2c445_left.jpg","66_dfdc33f2e0bc0f6d0bad0ea2a6f28cdd_left.jpg","7_e2f5f4fa6f01d807833dfdecb6e2c445_right.jpg","73_0a812dc1b1c1c14461494e4018955a23_right.jpg","77_3bc8de6a72f510cfc4a46044642f5086_left.jpg","95_ea3a37a1764a226d67c6b05a45d1ba89_right.jpg"];

const userSelectedObjects = ["9_bab5f3e721538a0f66c9bf8fb1ca5e6b_right_1","87_bab5f3e721538a0f66c9bf8fb1ca5e6b_right_6","38_bab5f3e721538a0f66c9bf8fb1ca5e6b_right_13","16_bab5f3e721538a0f66c9bf8fb1ca5e6b_right_3","20_bab5f3e721538a0f66c9bf8fb1ca5e6b_left_1","46_bab5f3e721538a0f66c9bf8fb1ca5e6b_right_0","85_bab5f3e721538a0f66c9bf8fb1ca5e6b_right_0","65_bab5f3e721538a0f66c9bf8fb1ca5e6b_right_13","28_bab5f3e721538a0f66c9bf8fb1ca5e6b_right_0","33_bab5f3e721538a0f66c9bf8fb1ca5e6b_left_7","22_f24951e92144c80ad6c9ee797bb2ae98_left_2","31_f24951e92144c80ad6c9ee797bb2ae98_left_6","32_f24951e92144c80ad6c9ee797bb2ae98_left_7","37_f24951e92144c80ad6c9ee797bb2ae98_left_2","84_f24951e92144c80ad6c9ee797bb2ae98_right_5","84_f24951e92144c80ad6c9ee797bb2ae98_left_7","19_f24951e92144c80ad6c9ee797bb2ae98_left_4","24_f24951e92144c80ad6c9ee797bb2ae98_right_0","35_f24951e92144c80ad6c9ee797bb2ae98_left_6","10_f24951e92144c80ad6c9ee797bb2ae98_left_7","7_e2f5f4fa6f01d807833dfdecb6e2c445_right_5","28_e2f5f4fa6f01d807833dfdecb6e2c445_right_3","65_e2f5f4fa6f01d807833dfdecb6e2c445_left_3","49_e2f5f4fa6f01d807833dfdecb6e2c445_right_13","32_e2f5f4fa6f01d807833dfdecb6e2c445_right_0","44_e2f5f4fa6f01d807833dfdecb6e2c445_left_9","55_e2f5f4fa6f01d807833dfdecb6e2c445_left_8","61_e2f5f4fa6f01d807833dfdecb6e2c445_left_5","18_e2f5f4fa6f01d807833dfdecb6e2c445_right_0","2_e2f5f4fa6f01d807833dfdecb6e2c445_right_7","41_e2f5f4fa6f01d807833dfdecb6e2c445_right_9","40_0a812dc1b1c1c14461494e4018955a23_left_3","103_0a812dc1b1c1c14461494e4018955a23_right_7","83_0a812dc1b1c1c14461494e4018955a23_right_6","112_0a812dc1b1c1c14461494e4018955a23_right_7","118_0a812dc1b1c1c14461494e4018955a23_left_1","99_0a812dc1b1c1c14461494e4018955a23_left_0","105_0a812dc1b1c1c14461494e4018955a23_right_4","82_0a812dc1b1c1c14461494e4018955a23_right_0","97_0a812dc1b1c1c14461494e4018955a23_right_2","68_0a812dc1b1c1c14461494e4018955a23_left_0","241_48027a6085f9e1b7244222670c8d8cab_left_1","4_48027a6085f9e1b7244222670c8d8cab_right_6","15_48027a6085f9e1b7244222670c8d8cab_left_2","134_48027a6085f9e1b7244222670c8d8cab_left_4","181_48027a6085f9e1b7244222670c8d8cab_left_1","182_48027a6085f9e1b7244222670c8d8cab_left_0","38_48027a6085f9e1b7244222670c8d8cab_left_6","253_48027a6085f9e1b7244222670c8d8cab_left_5","305_48027a6085f9e1b7244222670c8d8cab_left_0","30_48027a6085f9e1b7244222670c8d8cab_right_9","66_dfdc33f2e0bc0f6d0bad0ea2a6f28cdd_left_3","73_dfdc33f2e0bc0f6d0bad0ea2a6f28cdd_right_2","84_dfdc33f2e0bc0f6d0bad0ea2a6f28cdd_right_8","20_dfdc33f2e0bc0f6d0bad0ea2a6f28cdd_right_11","68_dfdc33f2e0bc0f6d0bad0ea2a6f28cdd_right_0","147_dfdc33f2e0bc0f6d0bad0ea2a6f28cdd_left_0","67_dfdc33f2e0bc0f6d0bad0ea2a6f28cdd_right_3","126_dfdc33f2e0bc0f6d0bad0ea2a6f28cdd_right_1","80_dfdc33f2e0bc0f6d0bad0ea2a6f28cdd_right_4","4_dfdc33f2e0bc0f6d0bad0ea2a6f28cdd_right_3","36_ea3a37a1764a226d67c6b05a45d1ba89_right_11","2_ea3a37a1764a226d67c6b05a45d1ba89_right_7","18_ea3a37a1764a226d67c6b05a45d1ba89_left_3","95_ea3a37a1764a226d67c6b05a45d1ba89_left_1","108_ea3a37a1764a226d67c6b05a45d1ba89_right_6","20_ea3a37a1764a226d67c6b05a45d1ba89_left_11","16_ea3a37a1764a226d67c6b05a45d1ba89_left_0","64_ea3a37a1764a226d67c6b05a45d1ba89_left_4","36_ea3a37a1764a226d67c6b05a45d1ba89_right_2","22_ea3a37a1764a226d67c6b05a45d1ba89_right_8","56_78cc5322a85e208faa2f814002ea43f5_right_1","135_78cc5322a85e208faa2f814002ea43f5_right_6","61_78cc5322a85e208faa2f814002ea43f5_right_7","66_78cc5322a85e208faa2f814002ea43f5_left_10","116_78cc5322a85e208faa2f814002ea43f5_left_3","138_78cc5322a85e208faa2f814002ea43f5_left_13","11_78cc5322a85e208faa2f814002ea43f5_right_3","17_78cc5322a85e208faa2f814002ea43f5_left_3","26_78cc5322a85e208faa2f814002ea43f5_right_1","222_3bc8de6a72f510cfc4a46044642f5086_left_2","58_3bc8de6a72f510cfc4a46044642f5086_left_6","48_3bc8de6a72f510cfc4a46044642f5086_left_1","130_3bc8de6a72f510cfc4a46044642f5086_right_4","97_3bc8de6a72f510cfc4a46044642f5086_left_0","108_3bc8de6a72f510cfc4a46044642f5086_right_3","50_3bc8de6a72f510cfc4a46044642f5086_right_7","126_3bc8de6a72f510cfc4a46044642f5086_right_7","150_3bc8de6a72f510cfc4a46044642f5086_right_3","77_3bc8de6a72f510cfc4a46044642f5086_left_3"]

const userSelectedStripe = userSelectedObjects.map(d => {
  return d.substr(0, d.lastIndexOf("_")).replace("right", "").replace("left", "");
})

  let strech = !userSelectedStripe.includes(filename.replace("right", "").replace("left", "").replace(".jpg", ""));

  return (
    <div
      className={classNames(styles.container, { [styles.rotated]: rotated },  { [ styles.stretch]: strech } )}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/${path}/${filename}`}
        alt="img"
      ></img>
      {objects && (
        <div className={styles.bboxContainer}>
          <svg width="100%" viewBox="0 0 640 640">
            {
              objects
              // .sort((a, b) => {
              //   return (
              //     xScale(b.bbox[2] - b.bbox[0]) *
              //       yScale(b.bbox[3] - b.bbox[1]) -
              //     xScale(a.bbox[2] - a.bbox[0]) * yScale(a.bbox[3] - a.bbox[1])
              //   );
              // })
              .filter(d => d.score >= 0.85)
              .map((object, i) => {
                return (
                  <React.Fragment key={i}>
                    <rect
                      className={classNames(styles.objRect, { [styles.userSelectedObject]: !userSelectedObjects.includes(filename.replace(".jpg", "")+"_"+(i)) })}
                      x={xScale(object.bbox[0])}
                      y={yScale(object.bbox[1])}
                      width={xScale(object.bbox[2] - object.bbox[0])}
                      height={yScale(object.bbox[3] - object.bbox[1])}
                    ></rect>
                  </React.Fragment>
                );
              })}
          </svg>
        </div>
      )}
    </div>
  );
};
export default DenseImage;
