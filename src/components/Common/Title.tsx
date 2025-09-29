import { StyleSheet, Text, View } from "react-native"
interface PropsTitle {
  title: string;
  subtitle?: string;
}


export const Title = ({ title, subtitle }: PropsTitle) => {
  return (
    <View style={styleTitle.container}>
      <Text style={styleTitle.info}>{title}</Text>
      {
        subtitle && <Text style={styleTitle.subtitle}>{subtitle}</Text>
      }
    </View>
  )
}

const styleTitle = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    display: "flex",
    gap: 0
  },
  info: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#FF6B00",
  },
  subtitle: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#FF6B00",
    paddingLeft: 80
  }
})
