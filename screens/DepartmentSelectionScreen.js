import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const departments = [
  "화장품의약품학부",
  "응급구조학과",
  "시스템제어공학과",
  "건축학과",
  "컴퓨터공학과",
];

const DepartmentSelectionScreen = () => {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const handleSelectDepartment = (department) => {
    navigation.replace("NoticeScreen", { department }); // ✅ 선택한 학과 정보 전달
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>학과 선택</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="학과를 입력하세요"
          value={search}
          onChangeText={setSearch}
        />
        <FlatList
          style={styles.list} // ✅ 리스트 높이 조절
          data={departments.filter((dept) => dept.includes(search))}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => handleSelectDepartment(item)}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // ✅ 화면 전체를 차지
    justifyContent: "center", // ✅ 수직 중앙 정렬
    alignItems: "center", // ✅ 수평 중앙 정렬
    paddingHorizontal: 20, // ✅ 좌우 여백 추가
  },
  innerContainer: {
    width: "100%", // ✅ 가로 폭 조절
    maxWidth: 350, // ✅ 가로 크기 제한
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5, // ✅ 안드로이드 그림자 효과
    shadowColor: "#000", // ✅ iOS 그림자 효과
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  searchBar: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  list: {
    maxHeight: 200, // ✅ 리스트 크기 제한
  },
  item: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    marginVertical: 5,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default DepartmentSelectionScreen;

