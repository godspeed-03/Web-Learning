import React from "react";

const data = [
  { keyword: "Keyword 1", cr: "4.4", ctr: "4.4", qs: "1100", cpc: "₹4", cpa: "₹4", roas: "12.5x", sis: "12.5x" },
  { keyword: "Keyword 2", cr: "3.2", ctr: "3.8", qs: "900", cpc: "₹3.5", cpa: "₹4.2", roas: "10.2x", sis: "11.0x" },
];

const KeywordPerformance = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Keywords Performance</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-100 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 text-left">Keyword</th>
              <th className="p-3 text-center">CR</th>
              <th className="p-3 text-center">CTR</th>
              <th className="p-3 text-center">QS</th>
              <th className="p-3 text-center">CPC</th>
              <th className="p-3 text-center">CPA</th>
              <th className="p-3 text-center">ROAS</th>
              <th className="p-3 text-center">SIS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3 text-left">{item.keyword}</td>
                <td className="p-3 text-center">{item.cr}</td>
                <td className="p-3 text-center">{item.ctr}</td>
                <td className="p-3 text-center">{item.qs}</td>
                <td className="p-3 text-center">{item.cpc}</td>
                <td className="p-3 text-center">{item.cpa}</td>
                <td className="p-3 text-center">{item.roas}</td>
                <td className="p-3 text-center">{item.sis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KeywordPerformance;