import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.6,
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: "bold",
    color: "#5b21b6",
  },
  date: {
    fontSize: 10,
    marginBottom: 24,
    color: "#6b7280",
  },
  heading: {
    fontSize: 13,
    marginTop: 18,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#1f2937",
  },
  paragraph: {
    marginBottom: 8,
    color: "#374151",
  },
  bullet: {
    marginBottom: 4,
    marginLeft: 16,
    color: "#374151",
  },
  footer: {
    marginTop: 32,
    paddingTop: 12,
    borderTop: "1px solid #e5e7eb",
    fontSize: 9,
    color: "#9ca3af",
  },
});

export function PrivacyPDF() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Strynder — Privacy Policy</Text>
        <Text style={styles.date}>Last updated: 22 June 2026</Text>

        <Text style={styles.heading}>1. What We Collect</Text>
        <Text style={styles.paragraph}>
          Strynder collects only the minimum information necessary to provide our
          invoice generation service:
        </Text>
        <Text style={styles.bullet}>
          • Your email address — used solely for account login and identification.
        </Text>
        <Text style={styles.bullet}>
          • Business details you provide — such as your business name, address,
          and tax identification number.
        </Text>
        <Text style={styles.bullet}>
          • Invoice data you create — including line items, totals, and client
          information you enter.
        </Text>

        <Text style={styles.heading}>2. How We Store Your Data</Text>
        <Text style={styles.paragraph}>
          Your data is stored securely using Supabase, which provides
          enterprise-grade encryption both in transit and at rest. We take
          reasonable technical and organisational measures to protect your
          information against unauthorised access, alteration, or destruction.
        </Text>

        <Text style={styles.heading}>
          3. What We Do NOT Do
        </Text>
        <Text style={styles.bullet}>
          • We do NOT sell, rent, trade, or otherwise share your personal data
          with any third party for marketing or commercial purposes.
        </Text>
        <Text style={styles.bullet}>
          • We do NOT use your invoice data or business details for any purpose
          other than providing the Strynder service to you.
        </Text>
        <Text style={styles.bullet}>
          • We do NOT store payment information, credit card numbers, or
          financial account credentials of any kind.
        </Text>
        <Text style={styles.bullet}>
          • We do NOT access, view, or analyse the content of your invoices
          except as necessary to provide support when you request it.
        </Text>

        <Text style={styles.heading}>4. Your Responsibilities</Text>
        <Text style={styles.paragraph}>
          You are solely responsible for ensuring the accuracy of the invoices
          you generate using Strynder. You are also responsible for complying
          with all applicable tax laws, reporting obligations, and regulatory
          requirements in your jurisdiction. Strynder provides the tooling — it
          does not provide tax, legal, or accounting advice.
        </Text>

        <Text style={styles.heading}>5. Data Retention & Deletion</Text>
        <Text style={styles.paragraph}>
          Your data is retained for as long as you maintain an active Strynder
          account. You may request the deletion of all your data at any time by
          contacting us. Upon account deletion, your invoice data and business
          details will be permanently removed from our systems within 30 days.
        </Text>

        <Text style={styles.heading}>6. Contact</Text>
        <Text style={styles.paragraph}>
          If you have any questions about this privacy policy or how your data
          is handled, please reach out to us at privacy@strynder.com.
        </Text>

        <Text style={styles.footer}>
          Strynder — Simple, branded invoicing. This document is provided for
          informational purposes and does not constitute legal advice.
        </Text>
      </Page>
    </Document>
  );
}
