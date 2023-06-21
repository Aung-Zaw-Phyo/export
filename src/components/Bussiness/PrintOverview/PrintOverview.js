import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import classes from "./PrintOverview.module.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import BussinessPDF from "../../Print/Bussiness/BussinessPDF";
import { BussinessPrintFun } from "../../Print/Bussiness/BussinessPrint";
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
          <BussinessPrintFun
            ref={componentRef}
            items={props.items}
            totalCost={props.totalCost}
          />
          <div className={`${classes.action} d-flex justify-content-between`}>
            <button onClick={handlePrint} className={`${classes.button}`}>
            <i classNmae="fa-solid fa-print"></i> PRINT
            </button>

            <PDFDownloadLink
              className={`${classes.button} text-decoration-none text-light text-center`}
              document={
                <BussinessPDF items={props.items} totalCost={props.totalCost} info={info}/>
              }
              fileName="export.pdf"
            >
              <i classNmae="fa-solid fa-file-pdf"></i> PDF
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
