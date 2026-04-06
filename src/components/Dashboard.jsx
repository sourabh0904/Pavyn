// // export default function Dashboard(){
// //     return (
// //         <></>
// //     )
// // }
// import React, { useState, useMemo } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const mockTransactions = [
//   { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
//   { id: 2, date: "2026-04-02", amount: 1200, category: "Food", type: "expense" },
//   { id: 3, date: "2026-04-03", amount: 800, category: "Transport", type: "expense" },
//   { id: 4, date: "2026-04-04", amount: 2000, category: "Freelance", type: "income" },
//   { id: 5, date: "2026-04-05", amount: 1500, category: "Shopping", type: "expense" },
// ];

// export default function Dashboard() {
//   const [transactions, setTransactions] = useState(mockTransactions);
//   const [filter, setFilter] = useState("all");
//   const [search, setSearch] = useState("");
//   const [role, setRole] = useState("viewer");

//   const filteredTransactions = useMemo(() => {
//     return transactions
//       .filter((t) => (filter === "all" ? true : t.type === filter))
//       .filter((t) => t.category.toLowerCase().includes(search.toLowerCase()))
//       .sort((a, b) => b.amount - a.amount);
//   }, [transactions, filter, search]);

//   const summary = useMemo(() => {
//     let income = 0, expense = 0;
//     transactions.forEach((t) => {
//       if (t.type === "income") income += t.amount;
//       else expense += t.amount;
//     });
//     return { income, expense, balance: income - expense };
//   }, [transactions]);

//   const pieData = useMemo(() => {
//     const map = {};
//     transactions.forEach((t) => {
//       if (t.type === "expense") {
//         map[t.category] = (map[t.category] || 0) + t.amount;
//       }
//     });
//     return Object.keys(map).map((k) => ({ name: k, value: map[k] }));
//   }, [transactions]);

//   return (
//     <div className="p-6 text-white bg-[#0b1120] min-h-screen">
//       <div className="flex justify-between mb-6">
//         <h1 className="text-l font-bold">Finance Dashboard</h1>
//         <Select value={role} onValueChange={setRole}>
//           <SelectTrigger className="w-40">
//             <SelectValue />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="viewer">Viewer</SelectItem>
//             <SelectItem value="admin">Admin</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         {["balance", "income", "expense"].map((key) => (
//           <Card key={key} className="bg-[#111827] border-none">
//             <CardContent className="p-4">
//               <p className="text-sm opacity-70 capitalize">{key}</p>
//               <h2 className="text-xl font-bold">₹{summary[key]}</h2>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Charts */}
//       <div className="grid md:grid-cols-2 gap-6 mb-6">
//         <Card className="bg-[#111827]">
//           <CardContent className="p-4">
//             <h2 className="mb-2">Balance Trend</h2>
//             <ResponsiveContainer width="100%" height={200}>
//               <LineChart data={transactions}>
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="amount" />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         <Card className="bg-[#111827]">
//           <CardContent className="p-4">
//             <h2 className="mb-2">Spending Breakdown</h2>
//             <ResponsiveContainer width="100%" height={200}>
//               <PieChart>
//                 <Pie data={pieData} dataKey="value" outerRadius={80}>
//                   {pieData.map((_, i) => (
//                     <Cell key={i} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Transactions */}
//       <Card className="bg-[#111827]">
//         <CardContent className="p-4">
//           <div className="flex gap-4 mb-4">
//             <Input placeholder="Search category" value={search} onChange={(e) => setSearch(e.target.value)} />
//             <Select value={filter} onValueChange={setFilter}>
//               <SelectTrigger className="w-40">
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All</SelectItem>
//                 <SelectItem value="income">Income</SelectItem>
//                 <SelectItem value="expense">Expense</SelectItem>
//               </SelectContent>
//             </Select>

//             {role === "admin" && (
//               <Button onClick={() => {
//                 const newTx = {
//                   id: Date.now(),
//                   date: "2026-04-06",
//                   amount: 1000,
//                   category: "New",
//                   type: "income",
//                 };
//                 setTransactions((prev) => [...prev, newTx]);
//               }}>
//                 Add
//               </Button>
//             )}
//           </div>

//           <div className="space-y-2">
//             {filteredTransactions.map((t) => (
//               <div key={t.id} className="flex justify-between p-2 bg-[#0f172a] rounded">
//                 <div>
//                   <p>{t.category}</p>
//                   <p className="text-xs opacity-60">{t.date}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className={t.type === "income" ? "text-green-400" : "text-red-400"}>
//                     ₹{t.amount}
//                   </p>
//                   <p className="text-xs opacity-60">{t.type}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>

//       {/* Insights */}
//       <div className="mt-6">
//         <Card className="bg-[#111827]">
//           <CardContent className="p-4">
//             <h2 className="mb-2">Insights</h2>
//             <p>
//               Highest spending category: {pieData.sort((a, b) => b.value - a.value)[0]?.name || "N/A"}
//             </p>
//             <p>
//               Total Transactions: {transactions.length}
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
import React, { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const mockTransactions = [
  { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
  { id: 2, date: "2026-04-02", amount: 1200, category: "Food", type: "expense" },
  { id: 3, date: "2026-04-03", amount: 800, category: "Transport", type: "expense" },
  { id: 4, date: "2026-04-04", amount: 2000, category: "Freelance", type: "income" },
  { id: 5, date: "2026-04-05", amount: 1500, category: "Shopping", type: "expense" },
];

export default function Dashboard() {
  const [transactions, setTransactions] = useState(mockTransactions);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("desc");
  const [role, setRole] = useState("viewer");

  // FILTER + SEARCH + SORT
  const filteredTransactions = useMemo(() => {
    let data = [...transactions];

    if (filter !== "all") {
      data = data.filter((t) => t.type === filter);
    }

    if (search) {
      data = data.filter((t) =>
        t.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    data.sort((a, b) =>
      sort === "asc" ? a.amount - b.amount : b.amount - a.amount
    );

    return data;
  }, [transactions, filter, search, sort]);

  // SUMMARY
  const summary = useMemo(() => {
    let income = 0,
      expense = 0;

    transactions.forEach((t) => {
      if (t.type === "income") income += t.amount;
      else expense += t.amount;
    });

    return {
      income,
      expense,
      balance: income - expense,
    };
  }, [transactions]);

  // LINE CHART (cumulative balance)
  const trendData = useMemo(() => {
    let balance = 0;
    return transactions.map((t) => {
      balance += t.type === "income" ? t.amount : -t.amount;
      return { date: t.date.slice(5), balance };
    });
  }, [transactions]);

  // PIE DATA
  const pieData = useMemo(() => {
    const map = {};
    transactions.forEach((t) => {
      if (t.type === "expense") {
        map[t.category] = (map[t.category] || 0) + t.amount;
      }
    });

    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [transactions]);

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7a7a"];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 pointer-events-none 
        bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)]
        bg-[size:40px_40px]" />

      <div className="relative z-10 p-6 space-y-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <h1 className="text-2xl font-semibold">Finance Dashboard</h1>

          <Select value={role} onValueChange={setRole}>
            <SelectTrigger className="w-40 bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="viewer">Viewer</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* SUMMARY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Balance", value: summary.balance },
            { label: "Income", value: summary.income },
            { label: "Expenses", value: summary.expense },
          ].map((item) => (
            <Card key={item.label} className="bg-card border border-border shadow-sm">
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <h2 className="text-2xl font-semibold">₹{item.value}</h2>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CHARTS */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* LINE */}
          <Card className="bg-card border border-border shadow-sm">
            <CardContent className="p-5">
              <h2 className="mb-3 text-sm text-muted-foreground">
                Balance Trend
              </h2>

              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={trendData}>
                  <XAxis dataKey="date" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip />
                  <Line type="monotone" dataKey="balance" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* PIE */}
          <Card className="bg-card border border-border shadow-sm">
            <CardContent className="p-5">
              <h2 className="mb-3 text-sm text-muted-foreground">
                Spending Breakdown
              </h2>

              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" outerRadius={80}>
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* TRANSACTIONS */}
        <Card className="bg-card border border-border shadow-sm">
          <CardContent className="p-5 space-y-4">

            {/* CONTROLS */}
            <div className="flex flex-col md:flex-row gap-3">

              <Input
                placeholder="Search category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-background border-border"
              />

              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-40 bg-background border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-40 bg-background border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">High → Low</SelectItem>
                  <SelectItem value="asc">Low → High</SelectItem>
                </SelectContent>
              </Select>

              {role === "admin" && (
                <Button
                  onClick={() =>
                    setTransactions((prev) => [
                      ...prev,
                      {
                        id: Date.now(),
                        date: "2026-04-06",
                        amount: 1000,
                        category: "New",
                        type: "income",
                      },
                    ])
                  }
                >
                  Add
                </Button>
              )}
            </div>

            {/* LIST */}
            <div className="space-y-2">
              {filteredTransactions.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  No transactions found.
                </p>
              )}

              {filteredTransactions.map((t) => (
                <div
                  key={t.id}
                  className="flex justify-between items-center p-3 rounded-lg bg-muted border border-border hover:bg-accent transition"
                >
                  <div>
                    <p className="font-medium">{t.category}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.date}
                    </p>
                  </div>

                  <div className="text-right">
                    <p
                      className={
                        t.type === "income"
                          ? "text-green-500 font-medium"
                          : "text-red-500 font-medium"
                      }
                    >
                      ₹{t.amount}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* INSIGHTS */}
        <Card className="bg-card border border-border shadow-sm">
          <CardContent className="p-5 space-y-1">
            <h2 className="text-sm text-muted-foreground">Insights</h2>

            <p>
              Highest spending category:{" "}
              {pieData.sort((a, b) => b.value - a.value)[0]?.name || "N/A"}
            </p>

            <p>Total transactions: {transactions.length}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}