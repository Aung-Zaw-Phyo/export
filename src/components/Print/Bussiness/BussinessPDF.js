import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Create styles
Font.register({
  family: "Montserrat",
  src: "/fonts/montserrat.ttf",
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
  },
  container: {
    padding: "30px",
  },
  date: {
    flexDirection: "row",
    justifyContent: "flex-end",
    fontSize: "10px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  header: {
    flexDirection: "row",
    borderBottom: "1px solid #333",
    padding: "14px 6px",
    margin: "0",
    backgroundColor: "#ddd",
  },
  header_item: {
    width: "25%",
    fontWeight: "bold",
    fontSize: "12px",
  },
  header_item_2: {
    width: "33.33%",
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "flex-end",
    fontSize: "12px",
  },
  data: {
    flexDirection: "row",
    padding: "8px 0",
    borderBottom: "1px dotted #333",
  },
  data_item: {
    width: "25%",
    padding: "6px",
    fontSize: "12px",
  },
  data_item_2: {
    width: "33.33%",
    padding: "6px",
    flexDirection: "row",
    justifyContent: "flex-end",
    fontSize: "12px",
  },
  footer: {
    flexDirection: "row",
    padding: "14px 6px",
    fontWeight: 'extrabold'
  },
  footer_left: {
    width: "50%",
    fontWeight: "bold",
    fontSize: "12px",
  },
  footer_right: {
    width: "50%",
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "flex-end",
    fontSize: "12px",
  },
  info: {
    marginBottom: "15px",
  },

  title: {
    flexDirection: "row",
    justifyContent: "center",
    padding: "0",
    marginBottom: "12px",
    fontWeight: "bold",
    fontSize: "16px",
  },
  address: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 0,
    marginBottom: "8px",
    fontSize: "14px",
  },
});

const date = new Date();
const day = date.toLocaleString("en-Us", { day: "2-digit" });
const month = date.toLocaleString("en-Us", { month: "long" });
const year = date.getFullYear();
const today = day + " " + month + " " + year;

// Create Document Component
const BussinessPDF = (props) => (
  <Document>
    <Page size="A4" style={styles.container}>
      <View>
        <View style={styles.date}>
          <Text>{today}</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.title}><Text>{props.info.name}</Text></View>
          <View style={styles.address}><Text>{props.info.address1}</Text></View>
          <View style={styles.address}><Text>{props.info.address2}</Text></View>
          <View style={styles.address}>
            <Text>Phone - {props.info.phone}</Text>
          </View>
        </View>
        <View>
          <View style={styles.header}>
            <View style={styles.header_item}>
              <Text>Item</Text>
            </View>
            <View style={styles.header_item_2}>
              <Text>Price</Text>
            </View>
            <View style={styles.header_item_2}>
              <Text>Unit</Text>
            </View>
            <View style={styles.header_item_2}>
              <Text>Amount</Text>
            </View>
          </View>
          {props.items.map((item) => (
            <View key={item.id} style={styles.data}>
              <View style={styles.data_item}>
                <Text>{item.item}</Text>{" "}
              </View>
              <View style={styles.data_item_2}>
                <Text>{item.price}</Text>
              </View>
              <View style={styles.data_item_2}>
                <Text>{item.unit}</Text>
              </View>
              <View style={styles.data_item_2}>
                <Text>{item.amount}</Text>
              </View>
            </View>
          ))}
          <View style={styles.footer}>
            <View style={styles.footer_left}>
              <Text>Total Cost</Text>
            </View>
            <View style={styles.footer_right}>
              <Text>{props.totalCost}</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default BussinessPDF;
