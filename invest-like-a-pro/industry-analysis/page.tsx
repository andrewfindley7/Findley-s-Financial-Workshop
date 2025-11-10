'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Microscope, Building2, Cpu, HeartPulse, ShoppingCart, Gem, Utensils, Factory, Scale, Info, Globe, Phone, Sun, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


interface IndustryData {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  cyclicality: 'Cyclical' | 'Defensive' | 'Secular Growth';
  metrics: { metric: string; typicalRange: string; importance: string }[];
  risks: string[];
}

const industryData: IndustryData[] = [
  {
    id: 'tech',
    name: 'Information Technology',
    icon: Cpu,
    description: 'Technology companies are typically driven by innovation cycles and scalability. This sector includes software, hardware, and semiconductor companies, often characterized by high growth potential.',
    cyclicality: 'Secular Growth',
    metrics: [
      { metric: 'Revenue Growth', typicalRange: '15-30%+', importance: 'Crucial for valuing tech companies, as it indicates market adoption and share capture. However, growth must be analyzed alongside profitability; rapid, cash-burning growth without a clear path to profit is a red flag.' },
      { metric: 'Rule of 40', typicalRange: '> 40%', importance: 'A key metric for SaaS (Software-as-a-Service) companies. It states that (Revenue Growth % + Free Cash Flow Margin %) should be over 40%, showing a healthy balance between aggressive growth and profitability.' },
      { metric: 'Gross Margin', typicalRange: '70-90% (Software)', importance: 'Extremely high gross margins for software businesses indicate a scalable model with low replication costs. Lower margins for hardware companies are expected.' },
      { metric: 'ROIC', typicalRange: '15%+', importance: 'High ROIC shows the company is efficiently using its capital to generate profits, a sign of a strong business model and moat.'},
      { metric: 'Dividend Yield', typicalRange: '0-2%', importance: 'Often very low or zero, as most tech companies reinvest all profits back into the business to fuel further growth.' },
    ],
    risks: ['High valuation risk (prices often bake in high expectations)', 'Rapid technological disruption from competitors', 'Intense competition for talent', 'Regulatory scrutiny (antitrust, data privacy)'],
  },
  {
    id: 'health',
    name: 'Health Care',
    icon: HeartPulse,
    description: 'The healthcare sector is generally defensive, as demand for its products and services is less tied to the economic cycle. It includes pharmaceuticals, biotech, medical devices, and providers.',
    cyclicality: 'Defensive',
    metrics: [
      { metric: 'R&D Pipeline', typicalRange: 'Varies', importance: 'The lifeblood of biotech/pharma. A healthy pipeline has a mix of drugs in different stages (Phase 1, 2, 3) to balance high-risk/high-reward early-stage drugs with less-risky late-stage candidates.' },
      { metric: 'P/E Ratio', typicalRange: '15-30x', importance: 'Standard valuation for established pharma and device companies with stable earnings.' },
      { metric: 'Gross Margin', typicalRange: '60-80% (Pharma)', importance: 'High margins are common for patented drugs, but these margins are at risk from patent expirations ("patent cliff").' },
      { metric: 'ROIC', typicalRange: '10-20%', importance: 'Measures how effectively the company turns its large R&D investments into profitable drugs.'},
      { metric: 'Dividend Yield', typicalRange: '1-4%', importance: 'Mature pharmaceutical companies often pay stable and growing dividends.' },
    ],
    risks: ['Patent expirations ("patent cliff")', 'Drug trial failures (especially for biotech)', 'Government regulation and drug pricing pressure', 'Complex insurance and reimbursement systems'],
  },
    {
    id: 'financials',
    name: 'Financials',
    icon: Building2,
    description: 'The performance of financials is heavily dependent on credit conditions and interest rate policy. This sector includes banks, insurance companies, asset managers, and brokerage firms.',
    cyclicality: 'Cyclical',
    metrics: [
      { metric: 'P/B Ratio (Price-to-Book)', typicalRange: '0.8-2.0x', importance: 'A key valuation metric. Banks are valued based on their assets (loans) and liabilities (deposits). A P/B below 1 means the market values the bank at less than its stated net worth, which could signal undervaluation or underlying problems.' },
      { metric: 'Net Interest Margin (NIM)', typicalRange: '2-4%', importance: 'For banks, this is the difference between the interest they earn on loans and the interest they pay on deposits. A wider margin is better, but it is heavily influenced by central bank interest rates.' },
      { metric: 'Loan Loss Provision', typicalRange: '< 1% of loans', importance: 'Money set aside for expected loan defaults. A stable, low provision suggests healthy lending. A sudden, sharp increase is a major red flag, indicating the bank expects many of its loans to go bad.' },
      { metric: 'ROIC / ROE', typicalRange: '10-15%', importance: 'Return on Equity (ROE) is critical for banks, measuring profitability relative to their equity base. Well-run banks consistently generate ROE above 10%.' },
      { metric: 'Dividend Yield', typicalRange: '2-5%', importance: 'Banks and insurance companies are often stable dividend payers. A very high yield can be a warning sign of market concern.' },
    ],
    risks: ['Sensitivity to interest rate changes', 'Credit risk and loan defaults during recessions', 'Heavy government regulation', 'Disruption from financial technology (fintech)'],
  },
   {
    id: 'comms',
    name: 'Communication Services',
    icon: Phone,
    description: 'This is a diverse sector where old-economy telecoms meet new-economy media. It includes telecommunications carriers, entertainment companies, and interactive media/services.',
    cyclicality: 'Mixed',
    metrics: [
      { metric: 'P/E & P/S Ratios', typicalRange: '5-15x (Telecom), 20-40x+ (Media)', importance: 'Varies by sub-sector. Telecoms trade like utilities (low P/E), while social media companies trade on growth metrics (high P/S).' },
      { metric: 'Subscriber Growth / ARPU', typicalRange: 'Varies', importance: 'For telecoms and media, subscriber growth and Average Revenue Per User (ARPU) are key performance indicators.' },
      { metric: 'Debt-to-EBITDA', typicalRange: '2.5-4.0x (Telecom)', importance: 'Telecoms carry high debt for infrastructure. Media companies have lower debt. Compare within the sub-sector.' },
    ],
    risks: ['High capital expenditures for network buildouts (telecom)', 'Intense competition for user attention (media)', 'Regulatory oversight on data privacy and content (social media)'],
  },
  {
    id: 'consumer-discretionary',
    name: 'Consumer Discretionary',
    icon: ShoppingCart,
    description: 'This sector thrives on consumer confidence and is highly sensitive to the economic cycle. It includes non-essential goods and services like apparel, automotive, restaurants, and hotels.',
    cyclicality: 'Cyclical',
    metrics: [
      { metric: 'Same-Store Sales Growth', typicalRange: '> 0%', importance: 'A critical health indicator showing if existing stores are attracting more business. Negative same-store sales is a significant red flag.' },
      { metric: 'Inventory Levels', typicalRange: 'Stable or declining', importance: 'Rising inventory relative to sales can be a warning sign of slowing demand, which may lead to future discounts and lower profit margins.' },
      { metric: 'Gross Margin', typicalRange: '20-50%', importance: 'Varies widely. High-end luxury brands have high margins, while general retailers have thinner margins and rely on volume.' },
      { metric: 'ROIC', typicalRange: 'Varies widely', importance: 'Measures how efficiently a retailer uses its capital (stores, inventory) to generate profit.' },
      { metric: 'Dividend Yield', typicalRange: '0-4%', importance: 'Varies. Fast-growing retailers may pay no dividend, while mature ones often do.' },
    ],
    risks: ['Highly sensitive to consumer confidence and economic cycles', 'Intense competition from e-commerce', 'Changing fashion trends and consumer tastes', 'Supply chain disruptions'],
  },
    {
    id: 'consumer-staples',
    name: 'Consumer Staples',
    icon: Utensils,
    description: 'This defensive sector is built on brand power and consistent demand. It includes essential products that consumers buy regardless of their financial situation, like food, beverages, and household items.',
    cyclicality: 'Defensive',
    metrics: [
      { metric: 'P/E Ratio', typicalRange: '15-25x', importance: 'Often trade at premium valuations due to their stability and predictable earnings.' },
      { metric: 'Brand Strength', typicalRange: 'Qualitative', importance: 'Dominant brands like Coca-Cola or Procter & Gamble provide pricing power and command of shelf space, which is a major competitive advantage.' },
      { metric: 'Gross Margin', typicalRange: '20-40%', importance: 'Shows the company\'s pricing power over the commodity inputs (like corn, sugar, plastic) used to make their products.' },
      { metric: 'ROIC', typicalRange: '10-20%+', importance: 'High ROIC is common for strong brands that don\'t require massive capital investment to grow.' },
      { metric: 'Dividend Yield', typicalRange: '2-4%', importance: 'Many are mature companies that are known for returning cash to shareholders through stable and growing dividends.' },
    ],
    risks: ['Competition from private label (store) brands', 'Inflation of input costs (raw materials)', 'Shifts in consumer preferences towards healthier or organic options', 'Retailer pricing pressure'],
  },
  {
    id: 'industrials',
    name: 'Industrials',
    icon: Factory,
    description: 'Industrials are the backbone of the economy, but their performance is closely tied to the business cycle. This sector includes machinery, aerospace, defense, and transportation companies.',
    cyclicality: 'Cyclical',
    metrics: [
      { metric: 'P/E Ratio', typicalRange: '10-20x', importance: 'Tends to be lower due to the cyclical nature of the industry, as earnings can be volatile.' },
      { metric: 'Backlog', typicalRange: 'Growing', importance: 'A growing order backlog provides visibility into future revenues, which is crucial for capital-intensive businesses.' },
      { metric: 'Debt-to-Equity', typicalRange: '< 1.5x', importance: 'These businesses require large investments in plants and equipment. A manageable debt level is critical to surviving economic downturns.' },
      { metric: 'ROIC', typicalRange: '> 10%', importance: 'A key measure of how efficiently a company uses its large capital investments to generate profits. Consistently high ROIC is a sign of a quality industrial company.' },
      { metric: 'Dividend Yield', typicalRange: '1-3%', importance: 'Many mature industrial companies are reliable dividend payers.' },
    ],
    risks: ['Highly sensitive to economic cycles and corporate capital spending', 'Inflation of input costs (steel, energy)', 'Global supply chain disruptions', 'Dependency on government contracts (for aerospace & defense)'],
  },
    {
    id: 'energy',
    name: 'Energy',
    icon: Gem,
    description: 'The energy sector is a direct play on commodity prices and global supply/demand. It includes companies involved in the exploration, production, and distribution of oil, gas, and renewable energy sources.',
    cyclicality: 'Cyclical',
    metrics: [
      { metric: 'P/E & P/S Ratios', typicalRange: '5-15x (cyclical lows) to negative (cyclical highs)', importance: 'These metrics fluctuate wildly with commodity prices, making them less reliable than in other sectors.' },
      { metric: 'Price-to-Cash-Flow (P/CF)', typicalRange: '3-10x', importance: 'Often a more stable metric than P/E, as cash flow can be more consistent than earnings.' },
      { metric: 'Debt-to-EBITDA', typicalRange: '< 2.0x', importance: 'Energy is a capital-intensive and volatile industry. A low debt level is crucial for survival during commodity price downturns.' },
    ],
    risks: ['Extreme sensitivity to commodity prices (oil, natural gas)', 'Geopolitical risks affecting supply', 'High capital expenditures for exploration and production', 'Regulatory changes related to environmental policy'],
  },
  {
    id: 'utilities',
    name: 'Utilities',
    icon: Sun,
    description: 'Utilities are regulated monopolies that function as "bond proxies" for income investors. This sector includes companies that provide essential services like electricity, water, and natural gas.',
    cyclicality: 'Defensive',
    metrics: [
      { metric: 'Dividend Yield', typicalRange: '3-5%+', importance: 'The primary reason investors own utility stocks. The stability and predictability of the dividend are key.' },
      { metric: 'P/E Ratio', typicalRange: '15-20x', importance: 'Valuations are often similar to the broader market, reflecting their stable, bond-like characteristics.' },
      { metric: 'Payout Ratio', typicalRange: '60-80%', importance: 'Shows what percentage of earnings is paid out as dividends. A stable ratio indicates a sustainable dividend.' },
    ],
    risks: ['Interest rate sensitivity (often called "bond proxies")', 'Regulatory risk (government agencies set the rates they can charge)', 'High debt levels required to maintain infrastructure'],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: Globe,
    description: 'The real estate sector offers income and an inflation hedge, but is highly sensitive to interest rates. It includes Real Estate Investment Trusts (REITs) and real estate development companies.',
    cyclicality: 'Cyclical',
    metrics: [
      { metric: 'Price-to-FFO (P/FFO)', typicalRange: '10-20x', importance: 'The standard valuation metric for REITs. Funds From Operations (FFO) adds back depreciation to earnings, giving a clearer picture of cash flow.' },
      { metric: 'Dividend Yield', typicalRange: '3-6%+', importance: 'REITs are required to pay out at least 90% of their taxable income as dividends, making them popular income investments.' },
      { metric: 'Occupancy Rate', typicalRange: '> 90%', importance: 'Shows the percentage of a REIT\'s properties that are currently leased. A high and stable occupancy rate indicates strong demand.' },
    ],
    risks: ['High sensitivity to interest rates (affects borrowing costs and property values)', 'Economic downturns can lead to higher vacancies and lower rents', 'Risks specific to property type (e.g., e-commerce hurting retail malls)'],
  },
  {
    id: 'materials',
    name: 'Materials',
    icon: Factory,
    description: 'The materials sector is at the very beginning of the supply chain, making it highly sensitive to global economic trends. It includes companies that process raw materials like chemicals, metals, and forestry products.',
    cyclicality: 'Cyclical',
    metrics: [
        { metric: 'P/E Ratio', typicalRange: '10-25x', importance: 'Very cyclical. P/E can look low at the peak of a cycle (high earnings) and very high at the bottom (low earnings). Using a normalized, mid-cycle earnings figure is often more useful.' },
        { metric: 'P/B Ratio', typicalRange: '1-3x', importance: 'Can be useful for valuing companies with significant physical assets like mines or chemical plants.' },
        { metric: 'Inventory Turnover', typicalRange: 'Varies', importance: 'A slowdown in how quickly a company sells its inventory can be an early sign of weakening global demand.' },
        { metric: 'Debt-to-EBITDA', typicalRange: '< 2.5x', importance: 'Like other cyclical, capital-intensive industries, a strong balance sheet is crucial for surviving downturns when both prices and volumes can fall.' },
    ],
    risks: ['High sensitivity to global economic growth and industrial production', 'Volatility in underlying commodity prices', 'Environmental regulations', 'High capital expenditures'],
  }
];


export default function IndustryAnalysisPage() {
    const searchParams = useSearchParams();
    const fromStep = searchParams.get('from');

  return (
    <>
      <Alert variant="destructive" className="mb-6 bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertDescription className="text-amber-800 dark:text-amber-300 text-xs">
              For educational use only. Not financial or tax advice. Consult a licensed advisor before making major decisions.
          </AlertDescription>
      </Alert>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Industry Analysis</h1>
        <p className="text-muted-foreground mt-2">Learn to evaluate a company by understanding the unique characteristics of its industry.</p>
      </div>
      <div className="space-y-6">
        <Alert>
          <Microscope className="h-4 w-4" />
          <AlertTitle className="font-headline">Valuation is Relative</AlertTitle>
          <AlertDescription>
            A "high" P/E ratio for a bank might be 15, while a "low" P/E ratio for a software company could be 30. A company's valuation must be assessed in the context of its growth rate, profitability, and industry. A company that is growing faster and has higher profit margins than its peers deserves a higher valuation multiple. Industry averages provide a baseline for comparison, but they are not a definitive rule for what a company is worth. This lesson is a starting point for understanding what to look for in different market sectors.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Industry Breakdowns</CardTitle>
            <CardDescription>Click on an industry to see its key metrics, characteristics, and common risks.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full" defaultValue="tech">
              {industryData.map(industry => (
                <AccordionItem value={industry.id} key={industry.id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <industry.icon className="h-6 w-6 text-primary" />
                      <div className="text-left">
                        <h3 className="text-lg font-semibold">{industry.name}</h3>
                        <p className="text-sm text-muted-foreground">{industry.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pl-4 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Characteristics</h4>
                      <p className="text-sm text-muted-foreground">This industry is generally considered <span className="font-semibold text-foreground">{industry.cyclicality}</span>.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <Table>
                            <TableCaption>Typical metric ranges for the {industry.name} industry. These are general guidelines and can vary widely.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Metric</TableHead>
                                <TableHead>Typical Range</TableHead>
                                <TableHead>Importance & What to Look For</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {industry.metrics.map(metric => (
                                <TableRow key={metric.metric}>
                                    <TableCell className="font-medium">{metric.metric}</TableCell>
                                    <TableCell>{metric.typicalRange}</TableCell>
                                    <TableCell>{metric.importance}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold mb-2 text-foreground">Common Risks & Considerations</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        {industry.risks.map(risk => <li key={risk}>{risk}</li>)}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
        
        <Alert variant="destructive" className="bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700">
            <Info className="h-4 w-4 text-amber-500" />
            <AlertTitle className="font-headline text-amber-900 dark:text-amber-200">These Are Generalizations</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-300">
                The ranges and characteristics listed here are broad estimates. Every company is unique, and these metrics can be influenced by a company's size, maturity, business model, and the current economic climate. This lesson is intended as a starting point for further research, not as a definitive set of rules.
            </AlertDescription>
        </Alert>

        <Card className="bg-primary/5 border-primary/20 text-center">
            <CardHeader>
                <CardTitle className="font-headline">Continue Your Journey</CardTitle>
                <CardDescription>
                    Now that you have a better understanding of how to analyze different industries, return to the Invest Like a Pro roadmap to continue your learning.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Button asChild>
                    <Link href={`/roadmaps/invest-like-a-pro${fromStep ? `?from=${fromStep}` : ''}`}>
                        Return to the Invest Like a Pro Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
      </div>
    </>
  );
}
