import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";

export default function NoticeScreen({ route }) {
  const { department } = route.params;
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ 서버 주소를 ngrok의 Forwarding URL로 변경!
    const serverUrl = "https://b0ca-2406-5900-3-772f-00-7.ngrok-free.app";

    fetch(`${serverUrl}/notices?department=${department}`)
      .then((response) => response.json())
      .then((data) => {
        setNotices(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching notices:", error);
        setLoading(false);
      });
  }, [department]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={notices}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alert(item.content)}>
            <View style={{ padding: 15, borderBottomWidth: 1, borderColor: "#ccc" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ color: "gray" }}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
