"use client";

import React from 'react';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';

export default function PatientRights() {
  return (
    <main className="min-h-screen">
      <Header />
      <Menu />
      <SideMenu />

      <div className="container mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">환자의 권리와 의무</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">환자의 권리</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">가. 진료받을 권리</h3>
                <p className="text-gray-700">
                  환자는 자신의 건강보호를 위해 적절한 보건의료서비스를 받고, 성별 · 나이 · 종교 · 신분 · 경제적 사정 등을 이유로 이를 침해받지 아니하며, 의료인은 정당한 사유없이 진료를 거부하지 못한다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">나. 알권리 및 자기결정권</h3>
                <p className="text-gray-700">
                  환자는 담당 의사 · 간호사 등으로부터 질병상태, 치료방법․예상결과(부작용 등), 진료비용에 대해 충분한 설명을 듣고 또 자세히 물어볼 수 있으며, 치료방법에 대해 동의여부를 결정할 권리를 가진다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">다. 비밀을 보호받을 권리</h3>
                <p className="text-gray-700">
                  환자는 진료와 관련된 신체상 · 건강상 비밀을 보호받으며, 의료인과 의료기관은 환자의 동의를 받지 않거나 범죄수사 등 법률이 정한 경우 외에는 비밀을 누설 · 발표하지 못한다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">라. 피해를 구제받을 권리</h3>
                <p className="text-gray-700">
                  환자는 권리를 침해받아 생명․신체적․금전적 피해가 발생한 경우, 한국의료분쟁조정중재원(02-6210-0114, www.k-medi.or.kr)에 상담 및 구제신청을 할 수 있다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">환자의 의무</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">가. 의료인에 대한 신뢰 · 존중 의무</h3>
                <p className="text-gray-700">
                  환자는 자신의 건강관련 정보를 의료인에게 정확히 알리고, 의료인의 치료계획에 대해 신뢰하고 존중하여야 한다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">나. 부정한 방법으로 진료를 받지 않을 의무</h3>
                <p className="text-gray-700">
                  환자는 진료 전에 본인의 신분을 밝혀야 하고, 타인의 명의로 진료를 받는 등 거짓이나 부정한 방법으로 진료를 받지 아니한다.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
} 