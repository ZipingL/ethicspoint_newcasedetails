import React from "react";
import ReactDOM from "react-dom/client";

export default function PrintView() {
  //on Load, print the page
  const [print, setPrint] = React.useState(false);
  const printStyles: React.CSSProperties = {
    printColorAdjust: "exact",
    colorAdjust: "exact",
    WebkitPrintColorAdjust: "exact",
    backgroundColor: "#fff",
  };
  React.useEffect(() => {
    if (!print) {
      window.print();
      setPrint(true);
    }
  }, [print]);
  return (
    <div
      id="panelQuestions"
      style={{
        margin: "4px",

        ...printStyles,
      }}
    >
      <div className="navHeading-panel">
        <span id="Header_ReportDetails" className="page-section-title">
          Report Details
        </span>
        <br />
      </div>
      <span className="rightNav-content-heading rightNav-content-heading-bold">
        Report Submission Date
      </span>
      <br />
      <span className="rightNav-content">8/23/2023</span>
      <br />
      <div className="report-details-panel" />
      <div style={{ marginTop: 10 }} className="report-details-panel">
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          Reported Company/Branch Information
        </span>
        <div>
          <span className="rightNav-content">Location</span>
          <span className="rightNav-content">
            Amazon Ethics Point Hotline
            <br />
            <br />
            https://amazon.xinjiang.llc
          </span>
        </div>
        <div>
          <span className="rightNav-content">City/State/Zip</span>
          <text>:</text>
          <span className="rightNav-content">
            Seattle, WA, 98101, United States )
          </span>
          <br />
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          Amazon Site Code
        </span>
      </div>
      <div className="rightNav-content report-details-panel">Alexandria</div>
      <div style={{ marginTop: 10 }}>
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          Please identify the person(s) engaged in this behavior:
        </span>
      </div>
      <div className="rightNav-content report-details-panel">
        Caroline Gray - Senior HR Business Rep
        <br />
        Cassie Ademola - BxT Partner
        <br />
        Ashley Dixon - US Sr Case Manager (S) [A]
      </div>
      <div style={{ marginTop: 10 }}>
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          Do you suspect or know that a supervisor or management is involved?
        </span>
      </div>
      <div className="rightNav-content report-details-panel">Yes</div>
      <div style={{ marginTop: 10 }}>
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          If yes, then who?
        </span>
      </div>
      <div className="rightNav-content report-details-panel">
        Sneha Chaturvedi Lalit
        <br />
        Adam Selipsky
        <br />
        David Zapolsky
      </div>
      <div style={{ marginTop: 10 }}>
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          Is management aware of this problem?
        </span>
      </div>
      <div className="rightNav-content report-details-panel">Yes</div>
      <div style={{ marginTop: 10 }}>
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          What is the general nature of this matter?
        </span>
      </div>
      <div className="rightNav-content report-details-panel">
        The intricacies of the situation have unfortunately escalated beyond
        necessary complexity and thus the general nature of this matter now runs
        along several issues across differing department and/or organizational
        functions/bylaws. To encapsulate the essence of the matter, the entities
        of Amazon Legal, HR, and DLS have exhibited a retaliatory stance against
        me. This retaliation was in response to my utilization of the designated
        Ethics-point hotline, a platform intended for the very purpose of
        addressing such concerns. The crux of my grievance pertains to the
        calculation of my wages on an hourly basis, despite my status as a
        salaried employee
        <br />
        <br />
        Upon having escalated the matter via established protocols, including
        the SIM ticketing system, on the 5th day of May, 2022, I found myself
        unjustly barred from my devices by the combined forces of Amazon's legal
        and IT departments. This was followed by an ill-conceived and fraudulent
        attempt to terminate my employment, an act that was unmistakably
        retaliatory and a gross violation of acceptable organizational behavior.
        The primary basis for this assertion lies in the fact that from the 30th
        day of March, 2022, to the 11th day of June, 2022, I was under the
        protection of an approved Family and Medical Leave Act (FMLA) leave. It
        is a well-established legal principle that termination of employment
        during such a period is prohibited. The purported rationale for the
        attempt to label my employment status as 'terminated' was derived from
        anonymous messages I had posted on an EthicsPoint hotline thread,
        initiated on the 20th day of April, 2022. Not only were the issues I
        raised disregarded, but my statements were also manipulated and taken
        out of context to cast me in a light that seemingly warranted
        termination. Even when documented, these distortions are glaringly and
        patently retaliatory in nature, causing me profound emotional distress
        and challenging my faith in the system that is a system derived on the
        business interests of Amazon and thus by transposition: its leadership
        principles.
      </div>
      <div style={{ marginTop: 10 }}>
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          Where did this incident or violation occur?
        </span>
      </div>
      <div className="rightNav-content report-details-panel">
        This incident began around March of 2022, but the most definite date of
        retaliation is on May 5th is explained prior.
      </div>
      <div style={{ marginTop: 10 }}>
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          Please provide the specific or approximate time this incident
          occurred:
        </span>
      </div>
      <div className="rightNav-content report-details-panel">
        On May 5th, 2022: This would have occurred around 1 PM PST on May 5th
        2022. would be the day I was locked out of my amazon login and work
        devices. <br />
        <br />
        On May 7th, 2022: In an alarming display of retaliatory conduct,
        Amazon's Human Resources department orchestrated a visit from the police
        to my residence under the cloak of midnight. This act, clearly intended
        to instill fear and dissuade me from further pursuing the matter at
        hand, occurred precisely at 11:45 PM CST. The purpose of this visit was
        ostensibly to convey a simple message, yet the timing and manner of its
        delivery underscored its true intent as an adverse action.
        <br />
        <br />
        On May 20th 2022: It is with a heavy heart that I recount the events of
        Amazon Legal and HR's desperate intimidation attempt. In a move that can
        only be described as a blatant display of power, they dispatched agents
        from the Federal Bureau of Investigation and state-level police to my
        residence at precisely 2:30 PM CST. The message they delivered was
        shrouded in veiled threats of retaliation from Amazon. They insinuated
        that should I persist in my attempts to communicate with Amazon
        regarding this issue, they would resort to tarnishing my reputation
        amongst other tech companies, thereby hindering my future employment
        prospects.
        <br />
        <br />
        <br />
        Despite these intimidations attempt, I have remained undeterred and
        issued stern warnings to Amazon Legal. I made it clear that should the
        retaliation persist, all information pertaining to their retaliatory
        campaign would be made public. My initial intention was to resolve this
        matter internally, without the need for public awareness. However, the
        relentless exhaustion, deceit, and unsound actions of Amazon Legal
        concerning this retaliatory issue have left me with no choice but to
        bring this matter to the public's attention. The public is becoming
        increasingly aware of the situation, a circumstance that could have been
        avoided had Amazon Legal acted in a more ethical and professional
        manner.
      </div>
      <div style={{ marginTop: 10 }}>
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          How long do you think this problem has been going on?
        </span>
      </div>
      <div className="rightNav-content report-details-panel">
        More than a year
      </div>
      <div style={{ marginTop: 10 }}>
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          How did you become aware of this violation?
        </span>
      </div>
      <div className="rightNav-content report-details-panel">
        It happened to me
      </div>
      <div style={{ marginTop: 10 }}>
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          Please identify any persons who have attempted to conceal this problem
          and the steps they took to conceal it:
        </span>
      </div>
      <div className="rightNav-content report-details-panel">
        Amazon ERC
        <br /> - Examples include deflecting and avoiding questions concerning
        the issue when asked directly through support, or simply not responding
        at all.
        <br />
        <br />
        Amazon DLS
        <br /> - , it is to be noted that Amazon Disability Leave Services (DLS)
        has systematically sidestepped all issues raised pertaining to the
        retaliatory actions directed towards ERC. Furthermore, in an explicit
        manifestation of retaliatory adverse action, Amazon DLS has obliterated
        my FMLA leave, which had been duly sanctioned for the period spanning
        from March 30th, 2022 to June 11th, 2022. The rationale behind such an
        erasure was to pave the way for the invalid and fraudulent termination
        attempt to be set in motion by Amazon HR on the date of May 5th, 2022
        <br />
        <br />
        Amazon Executive Adam Selipsky
        <br />- After raising the issues to Adam Selipsky via Twitter (Now X),
        Adam Selpsky promptly blocked me.
        <br />
        <br />
        Caroline Gray
        <br /> - After raising the issues to Caroline through LinkedIn Premium
        Messaging, Caroline promptly blocked me on LinkedIn.
      </div>
      <div style={{ marginTop: 10 }} className="report-details-panel">
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          Details
        </span>
        <br />
        <span className="rightNav-content">
          Bettina &lt;bettthom@amazon.com&gt; was chatting with on Chime, right
          before I got locked out of my devices on May 5th.
          <br />
          <br />
          Brad Behm &lt;behm@amazon.com&gt; was working with me on an internal
          project right before I was retaliated against and made "missing" on
          May 5th.
          <br />
          <br />
          John Robert Wilsom &lt;johnrobw@amazon.com&gt; was working with me on
          an internal project right before I was retaliated against made
          "missing."
          <br />
          <br />
          Sneha Chaturvedi Lalit &lt;snehacl@amazon.com&gt; was my manager and
          retaliated against me during March of 2022, by forging documents to
          initiate a PIP process against me. As you can tell my ability and
          skill set now publically displayed (albeit forcibly due to the
          retaliatory campaign ongoing against my life) I am not at all the
          person to retaliate against. Maximilian Wojcik
          &lt;maximw@amazon.com&gt; was my Career Ambassador and can attest to
          how I was wrongly convicted.
        </span>
      </div>
      <div style={{ marginTop: 10 }} className="report-details-panel">
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          Follow-Up Notes
        </span>
        <div className="rightNav-content">8/23/2023 6:58 PM</div>
        <div className="rightNav-content">
          I expect things to be resolved soon. By this week. If things are not
          resolved by this week, I will further escalate by disclosing more
          details of this matter through public channels.
          <br />
          <br />I implore you, Amazon Legal, to comprehend the gravity of the
          situation at hand now: it requires but a single publicly accessible
          site to become a trending topic on any social media platform (e.g.
          Reddit, Facebook, TeamBlind etc.) for the public relations damage to
          Amazon, the corporation, to escalate beyond any calculable measure.
          The clarity of the issue at hand and the analysis I, Ziping Liu, have
          presented to you, the Amazon Executives, is glaringly apparent. Yet,
          it has been outrageously disregarded, underscored by the fact that
          responses from executives have been submitted, stating that
          resolutions of this issue have been in progress since November of
          2022, as detailed at ziping.org.
          <br />
          <br />
          Action items of resolution for this retaliatory issue at large have
          been distilled to their simplest form, already proffered in a manner
          that invites effortless execution. To reiterate, the tasks at hand are
          as follows:
          <br /> - Reinstate my erased FMLA Leave
          <br /> - Issue my missing and now late wages
          <br /> - Allow my access to my professional account on Amazon Work,
          located at atoz.amazon.work, utilizing my personal login credentials,
          namely 'lziping'. This will enable me to diligently monitor the
          progression of my leave, scrutinize the status of my wages, and engage
          in secure, internal communication with pertinent stakeholders within
          Amazon
          <br />
          <br />
          Adam Selipsky himself has assured that remedial actions are being
          undertaken, and thus, I anticipate your response to echo this
          sentiment of resolution, rather than further evasion. I anticipate a
          response within the forthcoming 48-72 hours. The gravity of the issue
          at hand, which has been persistently raised since May of 2022, does
          not warrant a protracted period of 5-6 business days for resolution. I
          must remind Amazon Legal, that the vigilant eyes of government bodies
          are upon your actions. Should I be compelled to initiate legal
          proceedings against you at this juncture, the repercussions for you
          could be catastrophic.
          <br />
          <br />
          I, Ziping Liu, hereby reiterate my stance: I harbor no intentions of
          instigating legal proceedings against either you or Amazon. I have
          neither appointed, hired, nor informally sought the assistance of any
          legal counsel or scribe. All written communications are solely my own.
          My intention is to seek resolution internally, in good faith, and I
          anticipate reciprocation of the same spirit, as mandated by the bylaws
          of any organization in good standing within the domestic sector of the
          United States of America. I must underscore that the utilization of
          your internal ethics hotline as a tool for retaliation against
          employees is not only illegal and unethical, but it also casts a
          shadow on the leadership capabilities of Amazon's legal team and
          executives. By employing your own internal issues hotline as a means
          to retaliate against employees who voice concerns about issues that
          the 'leadership' is attempting to conceal, you inadvertently reveal
          that the organization is, in fact, under the sway of a rogue Union. By
          definition, as per the laws and policies that govern the nature of an
          organization registered to conduct business, it is not possible for an
          organization to initiate retaliatory acts. Therefore, such actions
          only serve to demonstrate that the organization is not operating as it
          should.
        </div>
      </div>
      <div style={{ marginTop: 10 }} className="report-details-panel">
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          Follow-Up Questions/Comments
        </span>
        <div>
          <span className="rightNav-content">
            There are no questions asked or comments from the organization.
          </span>
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <span className="rightNav-content-heading rightNav-content-heading-bold">
          Chat Transcripts
        </span>
        <div>
          <span className="rightNav-content">
            There are no chat transcripts for this incident.
          </span>
        </div>
      </div>
    </div>
  );
}
