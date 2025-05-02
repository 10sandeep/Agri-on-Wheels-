import React, { useState } from "react";
import IMAGE1 from "../assets/Proof of work/image1.jpg";
import IMAGE2 from "../assets/Proof of work/image2.jpg";
import IMAGE3 from "../assets/Proof of work/image3.jpg";
import IMAGE4 from "../assets/Proof of work/image4.jpg";
import IMAGE5 from "../assets/Proof of work/image5.jpg";
import IMAGE6 from "../assets/Proof of work/image6.jpg";
import IMAGE7 from "../assets/Proof of work/image7.jpg";
import IMAGE8 from "../assets/Proof of work/image8.jpg";
import IMAGE9 from "../assets/Proof of work/image9.jpg";
import IMAGE10 from "../assets/Proof of work/image10.jpg";
import IMAGE11 from "../assets/Proof of work/image11.jpg";
import IMAGE12 from "../assets/Proof of work/image12.jpg";
import IMAGE13 from "../assets/Proof of work/image13.jpg";
import IMAGE14 from "../assets/Proof of work/image14.jpg";
import IMAGE15 from "../assets/Proof of work/image15.jpg";
import IMAGE16 from "../assets/Proof of work/image16.jpg";
import VIDEO1 from "../assets/Proof of work/video1.mp4";
import VIDEO2 from "../assets/Proof of work/video2.mp4";
import VIDEO3 from "../assets/Proof of work/video3.mp4";
import VIDEO4 from "../assets/Proof of work/video4.mp4";
import VIDEO5 from "../assets/Proof of work/video5.mp4";
import VIDEO6 from "../assets/Proof of work/video6.mp4";
import VIDEO7 from "../assets/Proof of work/video7.mp4";
import VIDEO8 from "../assets/Proof of work/video8.mp4";
import VIDEO9 from "../assets/Proof of work/video9.mp4";
import VIDEO10 from "../assets/Proof of work/video10.mp4";

const FieldVisit: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>("");

  const mediaItems = [
    {
      type: "photo",
      url: IMAGE1,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE2,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE3,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE4,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE5,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE6,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE7,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE8,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE9,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE10,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE11,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE12,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE13,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE14,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE15,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "photo",
      url: IMAGE16,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "video",
      url: VIDEO10,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "video",
      url: VIDEO1,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "video",
      url: VIDEO2,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "video",
      url: VIDEO3,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "video",
      url: VIDEO4,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "video",
      url: VIDEO5,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "video",
      url: VIDEO6,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "video",
      url: VIDEO7,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "video",
      url: VIDEO8,
      date: "2025-03-17",
      day: "Monday",
    },
    {
      type: "video",
      url: VIDEO9,
      date: "2025-03-17",
      day: "Monday",
    },
  ];

  const filteredMedia = mediaItems.filter(
    (item) =>
      (selectedDate ? item.date === selectedDate : true) &&
      (selectedDay ? item.day === selectedDay : true)
  );

  return (
    <div className="min-h-screen bg-white py-16 text-green-700">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Field Visit</h1>
        {/* Filter Section */}
        <div className="mb-12 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <input
            type="date"
            className="border px-4 py-2 rounded-lg focus:ring-green-700"
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <select
            className="border px-4 py-2 rounded-lg focus:ring-green-700"
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            <option value="">All Days</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Tuesday">wednesday</option>
            <option value="Tuesday">Thursday</option>
            <option value="Tuesday">Friday</option>
            <option value="Tuesday">Saturday</option>
            <option value="Tuesday">Sunday</option>
          </select>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia
            .filter((item) => item.type === "photo")
            .map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={item.url}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia
            .filter((item) => item.type === "video")
            .map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <video controls className="w-full h-64 object-cover rounded-lg">
                  <source src={item.url} type="video/mp4" />
                </video>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FieldVisit;
