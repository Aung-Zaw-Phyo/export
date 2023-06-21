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
    width: "33.33%",
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
    width: "33.33%",
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
    borderTop: "1px solid #333",
    padding: "14px 6px",
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
});

const date = new Date();
const day = date.toLocaleString("en-Us", { day: "2-digit" });
const month = date.toLocaleString("en-Us", { month: "long" });
const year = date.getFullYear();
const today = day + " " + month + " " + year;

// Create Document Component
const PersonalPDF = (props) => (
  <Document>
    <Page size="A4" style={styles.container}>
      <View>
        <View style={styles.date}>
          <Text>{today}</Text>
        </View>
        <View>
          <View style={styles.header}>
            <View style={styles.header_item}>
              <Text>Name</Text>
            </View>
            <View style={styles.header_item_2}>
              <Text>Unit</Text>
            </View>
            <View style={styles.header_item_2}>
              <Text>Cost</Text>
            </View>
          </View>
          {props.items.map((item) => (
            <View key={item.id} style={styles.data}>
              <View style={styles.data_item}>
                <Text>{item.name}</Text>{" "}
              </View>
              <View style={styles.data_item_2}>
                <Text>{item.unit}</Text>
              </View>
              <View style={styles.data_item_2}>
                <Text>{item.cost}</Text>
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

export default PersonalPDF;
