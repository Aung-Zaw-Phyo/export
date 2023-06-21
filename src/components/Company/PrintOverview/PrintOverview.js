import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import classes from "./PrintOverview.module.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CompanyPDF from "../../Print/Company/CompanyPDF";
import { CompanyPrintFun } from "../../Print/Company/CompanyPrint";
import Example from "./Example";

const PrintOverview = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const infoFromDB = localStorage.getItem("info");
  const info = JSON.parse(infoFromDB);

  return (
    <div className={`${classes.overview}`}>
      {props.items.length > 0 ? (
        <>
          <CompanyPrintFun
            ref={componentRef}
            items={props.items}
            totalCost={props.totalCost}
          />
          <div className={`${classes.action} d-flex justify-content-between`}>
            <button onClick={handlePrint} className={`${classes.button}`}>
              PRINT
            </button>

            <PDFDownloadLink
              className={`${classes.button} text-decoration-none text-light text-center`}
              document={
                <CompanyPDF items={props.items} totalCost={props.totalCost} info={info}/>
              }
              fileName="export.pdf"
            >
              PDF
            </PDFDownloadLink>
          </div>
        </>
      ) : (
        <Example />
      )}
    </div>
  );
};

export default PrintOverview;
