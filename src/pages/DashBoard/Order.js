import React from 'react';

const Order = () => {
    return (
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">Hart Hagerty</div>
                        <div class="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
                <button class="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default Order;