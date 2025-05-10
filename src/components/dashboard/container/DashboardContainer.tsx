import DashboardHeader from "../Header";
import SavingsCard from "../SavingsCard";
import TabSwitcher from "../TabSwitcher";
import TransactionList from "../TransactionList";

export const DashboardContainer = () => {
  return (
    <div className="min-h-screen bg-background-muted">
      <main className="max-w-md mx-auto px-4 pb-24">
        <DashboardHeader title="Dashboard" />
        <div className="mb-6">
          <SavingsCard />
        </div>
        <TabSwitcher />
        <TransactionList />
      </main>
    </div>
  );
}
