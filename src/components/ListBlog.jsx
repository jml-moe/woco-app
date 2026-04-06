import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import { colors } from "../../assets/theme";
import {
  ReceiptText,
  Clock,
  MessageCircle,
  Bookmark,
} from "lucide-react-native";
import ListHorizontal from "./ListHorizontal";
import ItemSmall from "./ItemSmall";
import { BlogList } from "../data/blogs";

export default function ListBlog({ styles }) {
  const horizontalData = BlogList.slice(0, 5);
  const verticalData = BlogList.slice(5);
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ListHorizontal data={horizontalData} />
        <View style={styles.listCard}>
          {verticalData.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
