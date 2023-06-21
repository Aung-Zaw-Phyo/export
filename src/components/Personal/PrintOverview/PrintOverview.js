import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import classes from "./PrintOverview.module.css";
import { PersonalPrintFun } from "../../Print/Personal/PersonalPrint";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PersonalPDF from "../../Print/Personal/PersonalPDF";

const PrintOverview = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className={`${classes.overview}`}>
      {props.items.length > 0 ? (
        <>
          <PersonalPrintFun
            ref={componentRef}
            items={props.items}
            totalCost={props.totalCost}
          />
          <div className={`${classes.action} d-flex justify-content-between`}>

            <button onClick={handlePrint} className={`${classes.button}`}>
            <i className="fa-solid fa-print"></i> PRINT
            </button>

            <PDFDownloadLink
              className={`${classes.button} text-decoration-none text-light text-center`}
              document={
                <PersonalPDF  items={props.items} totalCost={props.totalCost}/>
              }
              fileName="export.pdf"
            ><i className="fa-solid fa-file-pdf"></i> PDF</PDFDownloadLink>

          </div>
        </>
      ) : (
        <p className="text-center text-muted m-0 p-0 p-3">
          Record your daily cost.
        </p>
      )}
    </div>
  );
};

export default PrintOverview;
