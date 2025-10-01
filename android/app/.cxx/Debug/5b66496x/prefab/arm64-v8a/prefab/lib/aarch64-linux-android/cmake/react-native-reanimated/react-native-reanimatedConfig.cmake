if(NOT TARGET react-native-reanimated::reanimated)
add_library(react-native-reanimated::reanimated SHARED IMPORTED)
set_target_properties(react-native-reanimated::reanimated PROPERTIES
    IMPORTED_LOCATION "/home/luis/Documents/Proyectos/Sistema-mototaxis/App/mototaxis/node_modules/react-native-reanimated/android/build/intermediates/cxx/Debug/3t2k4p3v/obj/arm64-v8a/libreanimated.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/luis/Documents/Proyectos/Sistema-mototaxis/App/mototaxis/node_modules/react-native-reanimated/android/build/prefab-headers/reanimated"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

if(NOT TARGET react-native-reanimated::worklets)
add_library(react-native-reanimated::worklets SHARED IMPORTED)
set_target_properties(react-native-reanimated::worklets PROPERTIES
    IMPORTED_LOCATION "/home/luis/Documents/Proyectos/Sistema-mototaxis/App/mototaxis/node_modules/react-native-reanimated/android/build/intermediates/cxx/Debug/3t2k4p3v/obj/arm64-v8a/libworklets.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/luis/Documents/Proyectos/Sistema-mototaxis/App/mototaxis/node_modules/react-native-reanimated/android/build/prefab-headers/worklets"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

