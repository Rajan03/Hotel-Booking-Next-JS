import React from "react";
import { VisibleAnimatedBtn, CtaBtnSection } from "./StyleComponents";

function CtaSection() {
  return (
    <>
      <CtaBtnSection>
        <h2>Good news! We have 4 free rooms for your selected dates!</h2>
        <VisibleAnimatedBtn>
          <span>Book Room</span>
          <span>Only 4 rooms left</span>
        </VisibleAnimatedBtn>
      </CtaBtnSection>
    </>
  );
}
export default CtaSection;
