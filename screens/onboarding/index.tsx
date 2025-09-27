import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Background with subtle star effects */}
      <View className="absolute inset-0 bg-black">
        {/* Subtle star-like elements */}
        <View className="absolute top-20 left-8 w-1 h-1 bg-white rounded-full opacity-60" />
        <View className="absolute top-32 right-12 w-1 h-1 bg-white rounded-full opacity-40" />
        <View className="absolute top-48 left-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-50" />
        <View className="absolute bottom-40 right-8 w-1 h-1 bg-white rounded-full opacity-30" />
        <View className="absolute bottom-60 left-12 w-0.5 h-0.5 bg-white rounded-full opacity-60" />
      </View>

      {/* Main content */}
      <View className="flex-1 px-4 sm:px-6 lg:px-8 py-4 sm:py-8 justify-between max-w-4xl mx-auto">
        {/* Header */}
        <View className="mt-4 sm:mt-8">
          <Text className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6 sm:mb-8">
            Welcome, Sarah K.
          </Text>
        </View>

        {/* Main graphic - Cityscape with AI house */}
        <View className="flex-1 items-center justify-center mb-6 sm:mb-8">
          <View className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative">
            {/* Cityscape background */}
            <View className="absolute inset-0">
              {/* Buildings */}
              <View className="absolute bottom-0 left-4 w-16 h-32 bg-blue-900 rounded-t-lg" />
              <View className="absolute bottom-0 left-20 w-12 h-24 bg-blue-800 rounded-t-lg" />
              <View className="absolute bottom-0 left-32 w-20 h-28 bg-blue-900 rounded-t-lg" />
              <View className="absolute bottom-0 right-4 w-14 h-36 bg-blue-800 rounded-t-lg" />
              <View className="absolute bottom-0 right-20 w-18 h-30 bg-blue-900 rounded-t-lg" />
              
              {/* Central AI House */}
              <View className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <View className="w-20 h-20 bg-white rounded-lg shadow-lg items-center justify-center">
                  {/* Brain icon in house */}
                  <View className="w-8 h-8 bg-orange-400 rounded-full items-center justify-center">
                    <View className="w-4 h-4 bg-white rounded-full" />
                  </View>
                </View>
              </View>

              {/* Glowing network lines */}
              <View className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <View className="w-40 h-40 border border-blue-400 rounded-full opacity-30" />
                <View className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-blue-300 rounded-full opacity-20" />
              </View>
            </View>
          </View>

          {/* Headline */}
          <Text className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mt-6 sm:mt-8 mb-8 sm:mb-12 px-4">
            Your AI Partner for Real Estate Success
          </Text>
        </View>

        {/* Feature List */}
        <View className="mb-6 sm:mb-8">
          {/* Feature 1 */}
          <View className="flex-row items-center mb-4 sm:mb-6">
            <View className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-400 rounded-lg items-center justify-center mr-3 sm:mr-4">
              <View className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full" />
            </View>
            <Text className="text-white text-base sm:text-lg md:text-xl flex-1">
              Smart Lead Management
            </Text>
          </View>

          {/* Feature 2 */}
          <View className="flex-row items-center mb-4 sm:mb-6">
            <View className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-400 rounded-lg items-center justify-center mr-3 sm:mr-4">
              <View className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full items-center justify-center">
                <View className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-400 rounded-sm" />
              </View>
            </View>
            <Text className="text-white text-base sm:text-lg md:text-xl flex-1">
              Market Insights & Analytics
            </Text>
          </View>

          {/* Feature 3 */}
          <View className="flex-row items-center mb-4 sm:mb-6">
            <View className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-400 rounded-lg items-center justify-center mr-3 sm:mr-4">
              <View className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full items-center justify-center">
                <View className="w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full" />
              </View>
            </View>
            <Text className="text-white text-base sm:text-lg md:text-xl flex-1">
              Automated Client Communication
            </Text>
          </View>

          {/* Feature 4 */}
          <View className="flex-row items-center mb-6 sm:mb-8">
            <View className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-400 rounded-lg items-center justify-center mr-3 sm:mr-4">
              <View className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full items-center justify-center">
                <View className="w-3 h-2.5 sm:w-4 sm:h-3 bg-orange-400 rounded-sm transform rotate-45" />
              </View>
            </View>
            <Text className="text-white text-base sm:text-lg md:text-xl flex-1">
              Boost Productivity by 30%
            </Text>
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity className="bg-blue-500 p-3 sm:p-4 rounded-xl mb-4 sm:mb-6 mx-4 shadow-lg active:bg-blue-600">
          <Text className="text-white text-lg sm:text-xl font-bold text-center">
            Continue
          </Text>
        </TouchableOpacity>

        {/* Pagination */}
        <View className="items-center mb-4">
          {/* Dots */}
          <View className="flex-row items-center mb-2">
            <View className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full mr-2" />
            <View className="w-2 h-2 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2" />
            <View className="w-2 h-2 sm:w-2 sm:h-2 bg-blue-600 rounded-full" />
          </View>
          
          {/* Page counter */}
          <Text className="text-blue-400 text-xs sm:text-sm">
            1 of 3
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}